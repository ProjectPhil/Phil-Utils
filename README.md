# Phil Utils

A handy Node.js utility package for bots, websites, and general scripting. Includes logging, randomization, ASCII art, time utilities, and more.

## Installation

```
npm install phil-utils
```

Or, if using locally:
```
npm install ./putils
```

## Features
- Colorful logging with titles and styles
- Random ID and date utilities
- Timezone-aware time formatting
- Random array element selection
- Hex color checking and fixing
- ASCII art (figlet) with random font support

## Usage

```js
const utils = require('phil-utils'); // or require('./putils') if local

// Logger
utils.Logger('Hello, world!', { color: 'green', bold: true, title: 'INFO' });

// MakeID
const id = utils.MakeID(10); // e.g., 'aB3dE9xQw2'

// GetDate
const today = utils.GetDate(); // e.g., 'Mon May 13 2024'

// FetchTime
const nowInNY = utils.FetchTime('America/New_York', 'YYYY-MM-DD HH:mm:ss');

// GetRandomArray
const randomItem = utils.GetRandomArray(['apple', 'banana', 'cherry']);

// CheckIfHex
const check = utils.CheckIfHex('ff00ff'); // { pass: false, item: '#ff00ff' }
const check2 = utils.CheckIfHex('#ff00ff'); // { pass: true }

// Figlify
utils.Figlify('Hello!', { randFont: true }).then(console.log);
utils.Figlify('Hello!', { font: 'Ghost', width: 100 }).then(console.log);
```

## Logger Options
- `color`: Any chalk color (e.g., 'red', 'green', 'blue', 'yellow', etc.)
- `bg`: Any chalk background color (e.g., 'bgRed', 'bgGreen', etc.)
- `bold`: Boolean for bold text
- `title`: String to prefix the log

## Figlify Options
- `font`: Specify a figlet font (see all with `figlet.fontsSync()`)
- `randFont`: Boolean, use a random font
- `width`: Output width (default 700)

## License
MIT