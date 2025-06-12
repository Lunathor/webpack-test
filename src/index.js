import * as math from "./math";
import './style.css';
const multiply = (a) => a * 8;
const output = (text) => {
  const div = document.createElement('div');
  div.textContent = text;
  document.body.appendChild(div);
};

output('ES6 modules');
output('sum = ' + math.sum(2, 3));
output('multiply from math.js = ' + math.multiply(5))
output('multiply from index.js = ' + multiply(5));