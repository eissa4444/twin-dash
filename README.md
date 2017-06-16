# twin-dash
- ## [npm package](https://www.npmjs.com/package/twin-dash) 
- ## [try it](https://runkit.com/npm/twin-dash)

# The twin-dash library exported as Node.js modules.

installing
```
npm install twin-dash
```
example
```
var twinDash = require("twin-dash")
var __ =new twinDash.MyLib()
```
### countBy
```
__.countby([4, 8], x => x * x) 
// => {'16':1,'64':1}
__.countBy(['one', 'two', 'three','four'], 'length');
// => { '3': 2, '5': 1,'4':1 }
```
### map
```
function devideByTwo(x) {
  return x / 2 ;
}
 
__.map([4, 8], devideByTwo);
// => [2, 4]
 
_.map({ 'x': 10, 'y': 14 ,'z': 22}, devideByTwo);
// => [5,14,11] 
 
var users = [
  { 'user': 'Ahmad' },
  { 'user': 'Khalid' },
  { 'user': 'Mustafa' }
];
 
_.map(users, 'user');
// => ['Ahmad', 'Khalid', 'Mustafa']
```


