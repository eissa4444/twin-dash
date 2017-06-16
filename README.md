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
 
__.map({ 'x': 10, 'y': 14 ,'z': 22}, devideByTwo);
// => [5,14,11] 
 
var users = [
  { 'user': 'Ahmad' },
  { 'user': 'Khalid' },
  { 'user': 'Mustafa' }
];
 
__.map(users, 'user');
// => ['Ahmad', 'Khalid', 'Mustafa']
```
### every
```
__.every([true, 1, null, 'yes'], Boolean);
// => false
 
var users = [
  { 'user': 'Taha', 'age': 22, 'online': false },
  { 'user': 'Ramy',   'age': 18, 'online': false }
];
 
__.every(users, { 'user': 'Taha', 'online': false });
// => false
 
__.every(users, ['online', false]);
// => true
 
_.every(users, 'online');
// => false
```
### foreach
```
__.forEach(['a', 'b','c'], function(val) {
  console.log(val);
});
// => Logs `a` then `b`. then 'c'
 
_.forEach({ 'ahmad': 11, 'sayed': 23 }, function(val, key) {
  console.log(key);
});
// => Logs 'ahmad' then 'sayed' 
```

### find
```
var friends = [
  { 'name': 'waleed','height': 140, 'exsist': true },
  { 'name': 'morad', 'height': 178, 'exsist': false },
  { 'name': 'fisal', 'height': 182,  'exsist': true }
];
 
__.find(friends, function(o) { return o.height < 170; });
// =>   { 'name': 'waleed','height': 140, 'exsist': true }
 
__.find(friends, { 'height': 182, 'exsist': true });
// =>   { 'name': 'fisal', 'height': 182,  'exsist': true }
 
__.find(friends, ['exsist', false]);
// =>   { 'name': 'morad', 'height': 178, 'exsist': false }
 
__.find(friends, 'exsist');
// => { 'name': 'waleed','height': 140, 'exsist': true }
```

### filter
```
var friends = [
  { 'name': 'waleed','height': 140, 'exsist': true },
  { 'name': 'morad', 'height': 178, 'exsist': false },
  { 'name': 'fisal', 'height': 182,  'exsist': true }
];

__.filter(friends, function(o) { return !o.exsist; });
// =>  [{ 'name': 'morad', 'height': 178, 'exsist': false }]
 
__.filter(friends, { 'height': 182, 'exsist': true });
// => [{ 'name': 'fisal', 'height': 182,  'exsist': true }]
 
__.filter(friends, ['exsist', true]);
// => [{ 'name': 'waleed','height': 140, 'exsist': true },{ 'name': 'fisal', 'height': 182,  'exsist': true }]
 
__.filter(friends, 'exsist');
// => // => [{ 'name': 'waleed','height': 140, 'exsist': true },{ 'name': 'fisal', 'height': 182,  'exsist': true }]
```

