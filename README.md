<h1><b>color-easy</b></h1>
An easy way to use colors in NodeJS.

## Installation
```bash
npm install color-easy
```

## Usage
```js
var colors = require('color-easy');

// Simple way to get colors
colors.get('blue'); // Outputs #0000FF
colors.rgb('#0000FF'); // Outputs rgb(0, 0, 255)
colors.rgba('#0000FF'); // Outputs rgba(0, 0, 255, 1)
colors.hex(0, 0, 255); // Outputs #0000FF
colors.randomHex(); // Outputs a random hex such as #6F29F6
colors.randomRGB(); // Outputs a random rgb such as rgb(84, 63, 100)
colors.randomRGBA(); // Outputs a random rgba such as rgba(212,113,189,0.3)
```
## Available colors
```bash
red
blue
purple
green
cyan
turquoise
gray
white
black
pink
magenta
yellow
toxic
orange
brown
```
New functions are being added.
