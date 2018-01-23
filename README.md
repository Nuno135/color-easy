<h1><b>easy-color</b></h1>
An easy way to use colors in NodeJS.

<b>Works well with discord.js Rich-Embeds.</b>

## Installation
```bash
npm install color-easy
```

## Usage
```js
var Color = require('color-easy');
var colors = new Color();

// Simple way to get colors
colors.get('blue') // Outputs 0x0000FF
colors.rgb('#0000FF') // Outputs rgb(0, 0, 255)
colors.rgba('#0000FF') // Outputs rgba(0, 0, 255, 1)
colors.hex(0, 0, 255) // Outputs #0000FF
```
New functions are being added.
