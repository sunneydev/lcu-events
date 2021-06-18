# lcu-events

A lightweight cross-platform TS project for receiving events from LCU.

# Installation

```
npm install lcu-events
```

# Usage

```ts
import LCU from 'lcu-events';

const lcu = new LCU();

lcu.events.on('/lol-champ-select/v1/session', (data) => {
    // handle
})
```