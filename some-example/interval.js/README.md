interval.js
===

Do you know that you can do more in **window.setInterval()** ?

Inspired by angularjs [$interval](https://docs.angularjs.org/api/ng/service/$interval)

[DEMO](http://huei90.github.io/Knowledge-Database/some-example/interval.js/index.html)

Example
===

Countdown from 10 to 1
```javascript

var countdown = 10;

interval(function () {
    console.log(countdown--);
}, 1000, 10);
```
