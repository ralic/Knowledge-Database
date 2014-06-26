This is the collection of `Prototype.js` `fastclick.js` `isMobile.js` to detect Browser, OS

```js

// https://github.com/sstephenson/prototype/blob/master/src/prototype/prototype.js#L76
// https://github.com/ftlabs/fastclick/blob/master/lib/fastclick.js#L174
// https://github.com/kaimallea/isMobile/blob/master/isMobile.js

var Prototype = (function () {

    var ua = navigator.userAgent,
        isOpera = Object.prototype.toString.call(window.opera) == '[Object Opera]';

    return {
        Browser: {
            IE:             !!window.attachEvent && !isOpera,
            // ((userAgent.indexOf('msie') !== -1) || (userAgent.indexOf('Trident') !== -1))
            Opera:          isOpera,
            WebKit:         ua.indexOf('AppleWebKit/') > -1,
            Gecko:          ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
            MobileSafari:   /Apple.*Mobile/.test(ua),
        },
        OS: {
            Android:        ua.indexOf('Android') > 0,
            IOS:            /iP(ad|hone|od)/.test(ua),
            IOS4:           /iP(ad|hone|od)/.test(ua) && (/OS 4_\d(_\d)?/).test(ua)
        }
    }

})();
```

---

Using Callback when browser is **IE**
```js
var isIE = Prototype.Browser.IE;
var isIECallback = function (yes,no) {
    return (isIE) ? (yes ? yes() : null) : (no ? no() : null);
};
```

---

Do something one time when browser is **IE**
```js
var isIEDoSomethingOneTime = function () {
    if (isIE && ($.cookie('isIEDoSomething') !== 'Done')) {
        // do something
        $.cookie('isIEDoSomething', 'Done', { expires: 3, path: '/' });
        return;
    }
};
```
