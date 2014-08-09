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

`redactor.js` detect browser and oldIE

```js
var browser = function(browser) {
	var ua = navigator.userAgent.toLowerCase();
	var match = /(chrome)[ \/]([\w.]+)/.exec(ua)
			|| /(webkit)[ \/]([\w.]+)/.exec(ua)
			|| /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(ua)
			|| /(msie) ([\w.]+)/.exec(ua)
			|| ua.indexOf("compatible") < 0 && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(ua)
			|| [];

	if (browser == 'version') return match[2];
	if (browser == 'webkit') return (match[1] == 'chrome' || match[1] == 'webkit');

	return match[1] == browser;
}

var oldIE = function()
{
	if (this.browser('msie') && parseInt(this.browser('version'), 10) < 9) return true;
	
	return false;		
}
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
