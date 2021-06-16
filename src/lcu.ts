import find from "find-process";
import { EventEmitter } from "stream";
import WebSocket from "ws";
import LcuEvents from "./events";

process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

interface Event {
  data: any;
  eventType: string;
  uri: string;
}
declare interface wsEvents {
  on(event: string, listener: (message: string) => void): this;
  on(event: "connect", listener: (ws: WebSocket) => void): this;
  on(event: "disconnect", listener: () => void): this;
}

class wsEvents extends EventEmitter {
  private isOn: boolean = false;

  constructor() {
    super();
  }

  private async getLCUurl(): Promise<{
    authToken: string | undefined;
    appPort: string | undefined;
  }> {
    const argKeys = {
      authToken: "--remoting-auth-token",
      appPort: "--app-port",
    };
    const processes = await find("name", "LeagueClientUx", true);
    const lcuProcess = processes.find((p) =>
      ["LeagueClientUx", "LeagueClientUx.exe"].includes(p.name)
    );

    const lcuProcessArgs = lcuProcess?.cmd.split('" "');

    let authToken = lcuProcessArgs
      ?.find((a) => a.includes(argKeys.authToken), "")
      ?.split("=")[1];
    let appPort = lcuProcessArgs
      ?.find((a) => a.includes(argKeys.appPort))
      ?.split("=")[1];

    return { authToken, appPort };
  }

  public watchClient() {
    setInterval(async () => {
      const { authToken, appPort } = await this.getLCUurl();
      let validResponse = Boolean(authToken && appPort);
      if (!this.isOn && validResponse) {
        const ws = new WebSocket(
          `https://riot:${authToken}@127.0.0.1:${appPort}`
        );

        this.emit("connect", ws);
      } else if (this.isOn != validResponse) this.emit("disconnect");

      this.isOn = validResponse;
    }, 5000);
  }
}

class LCU {
  private wsEvents = new wsEvents();
  public events = new LcuEvents();

  constructor() {
    this.wsEvents.watchClient();
    this.onConnect();
  }

  private onConnect() {
    this.wsEvents.on("connect", (ws: WebSocket) => {
      ws.on("open", () => {
        ws.send(JSON.stringify([5, "OnJsonApiEvent"]));
      });

      ws.on("message", (message: string) => {
        if (!message) return;
        const event: Event = JSON.parse(message)[2];
        this.events.emit(event.uri, event.data);
      });
    });
  }
}

export default LCU;
