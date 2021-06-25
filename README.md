# lcu-events

A lightweight cross-platform TS project for receiving events from LCU.

# Installation

```
npm install lcu-events
```

# Usage

### Subscribe to a specific event

```ts
import LCU from 'lcu-events';

const lcu = new LCU();

lcu.events.on('/lol-champ-select/v1/session', (data) => {
    // handle
})
```

### Make a request to an endpoint

```ts
import LCU from "./lcu";

const lcu = new LCU();

lcu.wsEvents.on('connect', () => {
  lcu.fetch('/lol-login/v1/session')
  .then((resp) => resp.json())
  .then((data) => {
    // process data...
  })
})
```
