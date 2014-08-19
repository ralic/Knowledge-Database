Auto Hook Anchor Link
===

Auto get tag `<h3></h3>` to generate the anchor link

[example](http://www.mircozeiss.com/lockit-utilities/)

```js
var headings = document.getElementsByTagName('h3');
for (var i = 0; i < headings.length; i++) {

    var heading = headings[i];
    var id = heading.getAttribute('id');
    // create anchor link for deep linking to function
    var anchorLink = document.createElement('a');
    anchorLink.href = '#' + id;
    anchorLink.classList.add('link');
    anchorLink.innerHTML = '<i class="fa fa-link"></i>';
    heading.appendChild(anchorLink);
    // create link to github repo code with line number
    var navLink = document.querySelector('a[href="#' + id + '"]');
    var lineno = navLink.getAttribute('data-lineno');
    var sourceLink = document.createElement('a');
    sourceLink.href = 'https://github.com/zeMirco/lockit-utilities/blob/master/index.js#L' + lineno;
    sourceLink.classList.add('source-link');
    sourceLink.innerHTML = '<i class="fa fa-code"></i>';
    sourceLink.target = '_blank';
    heading.appendChild(sourceLink);
    
    }
```
