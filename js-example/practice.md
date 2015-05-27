
##Array.prototype.duplicate##
```js
// http://stackoverflow.com/questions/18262431/how-to-prototype-a-duplicate-prototype-method-for-array-in-javascript
[11,22,3,34,5,26,7,8,9].duplicate(); // [11,22,3,34,5,26,7,8,9,11,22,3,34,5,26,7,8,9]

Array.prototype.duplicate = function () {
    var array = this;
    return array.concat(array);
};
```

##Array.prototype.unique##
```js
Array.prototype.unique = function() {
    var unique = [];
    for (var i = 0; i < this.length; i++) {
        if (unique.indexOf(this[i]) == -1) {
            unique.push(this[i]);
        }
    }
    return unique;
};

// or function method
var arrayUnique = function(a) {
    return a.reduce(function(p, c) {
        if (p.indexOf(c) == -1) p.push(c);
        return p;
    }, []);
};

// fastest solution
array.filter(function (element, index, array) {
    return element in this ? false : this[element] = true;
}, {});

// jsPerf http://jsperf.com/array-filter-unique/13
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

There are different result from browser chrome/firefox [question](http://stackoverflow.com/questions/15109894/new-date-works-differently-in-chrome-and-firefox)

```js
// chrome
var a1 = new Date('2015-07-17T03:00:00Z'); // toISOString => 2015-07-17T03:00:00.000Z
var b1 = new Date('2014-10-01T07:19:33.657'); // toISOString => 2014-10-01T07:19:33.657Z

// firefox
var a2 = new Date('2015-07-17T03:00:00Z'); // toISOString => 2015-07-17T03:00:00.000Z
var b2 = new Date('2014-10-01T07:19:33.657'); // toISOString => 2014-09-30T23:19:33.657Z (wat!)

// Date.prototype,toISOString
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString
// ISO format (ISO 8601 Extended Format), which can be described as follows: YYYY-MM-DDTHH:mm:ss.sssZ
```

##Flatten##
```js
Array.prototype.flatten = function () {
    var array = this;
    var temp = [];
    for (var i = 0, length = array.length;i<length;i++) {
        if (typeof array[i] === 'object') { // array
            temp = temp.concat(array[i].flatten());
        } else { // string or int
            temp.push(array[i]);
        }
    }
    return temp;
}
var array = [1, [2, [ [3, 4], 5], 6]].flatten();
// => [1, 2, 3, 4, 5, 6]
```

##To Fixed Not Rounding##
```js
Number((value).toString().match(/^\d+(?:\.\d{0,2})?/))

// value
// 12 => 12
// 12. => 12
// 12.00 => 12
// 12.1 => 12.1
// 12.21 =>  12.21
// 12.2199 => 12.21
// 12.21001 => 12.21

// what if rounding (2)
parseFloat(value).toFixed(2)
```

##To Fixed But Keep Integer

```js
parseFloat((value).toFixed(2))
```

```js
Number.prototype.toFixed = function(precision) {
    var power = Math.pow(10, precision || 0);
    return String(Math.round(this * power)/power);
}
```
