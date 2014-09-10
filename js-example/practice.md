
##Array.prototype.duplicate##
```js
// http://stackoverflow.com/questions/18262431/how-to-prototype-a-duplicate-prototype-method-for-array-in-javascript
[11,22,3,34,5,26,7,8,9].duplicate(); // [11,22,3,34,5,26,7,8,9,11,22,3,34,5,26,7,8,9]

Array.prototype.duplicate = function () {
    var array = this;
    return array.concat(array);
};
```

##setTimeout##
```js
// 0 1 2 3
for (var i=0;i<=3;i++){
    setTimeout(console.log(i), 0);
}
// 4 4 4 4
for (var i=0;i<=3;i++){
    setTimout(function () { console.log(i), 0);
}
```
