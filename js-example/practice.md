
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
// or this
for (var i=0;i<=3;i++){
    var f = function () {
        console.log(i);
    }
    setTimeout(f(),0);
}

// 4 4 4 4
for (var i=0;i<=3;i++){
    setTimeout(function () { console.log(i); }, 0);
}
```

##getSelectionText##
```js
// http://stackoverflow.com/questions/5379120/get-the-highlighted-selected-text
function getSelectionText() {
    var text = "";
    if (window.getSelection) {
        text = window.getSelection().toString();
    } else if (document.selection && document.selection.type != "Control") {
        text = document.selection.createRange().text;
    }
    return text;
}
```

##use strict##

http://www.w3schools.com/js/js_strict.asp

The following is not allowed

1. Using a variable without declare
2. Deleting a variable, a function, or an argument
3. Define a property more than once
4. Duplicating a parameter, name
5. Octal numeric literals and escape characters
6. Writing to a read-only/get-only property
7. Delete an undeletable property (eg: delete Object.property)
8. The string 'eval', 'argument'
9. with statement (with (Math){x = cos(2)};)
10. Reserved words

##new Date()##

There are different result from browser chrome/firefox

```
// chrome
var a1 = new Date('2015-07-17T03:00:00Z'); // UTC => Fri Jul 17 2015 11:00:00 GMT+0800 (CST)
var b1 = new Date('2014-10-01T07:19:33.657'); // UTC => Wed Oct 01 2014 15:19:33 GMT+0800 (CST)

// firefox
var a2 = new Date('2015-07-17T03:00:00Z'); // => Date 2015-07-17T03:00:00.000Z (THIS NO UTC+8!!!! )
var b2 = new Date('2014-10-01T07:19:33.657'); // => Date 2014-09-30T23:19:33.657Z
```
