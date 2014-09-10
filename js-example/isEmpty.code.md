
##isEmpty

```js
var isEmpty = function isEmpty(html) {
     html = html.replace(/&#x200b;|<br>|<br\/>|&nbsp;/gi, '');
     html = html.replace(/\s/g, '');
     html = html.replace(/^<p>[^\W\w\D\d]*?<\/p>$/i, '');

     return html == '';
}

// example
isEmpty('asdf'); // false
isEmpty(''); // true
isEmpty('   \n\t\r'); // true
```
