Autocomplete
===

Completely Free, without jQuery or any plugin.

Focus on `tagsinput` and `autocomplete`, but *small amount* and *known data*

Requirement
===

Currenly only Working on Chrome FF (IE is coming)

Open up a `http://localhost` or just `file://` server

>  node web-server.js

How to use
===
```html
<!-- include autocomplete form css -->
<link rel="stylesheet" href="autocomplete.css"/>
<!-- include autocomplete js prototype -->
<script src="autocomplete.js"></script>
<!-- initial autocomplete Element -->
<script>
    var auto = new AutoComplete({
        /* options */
    });
    auto.setList([/* Array data */])
</script>

<!-- else add the following html -->
<div class="form">
    <div class="form-wrapper">
        <input id="form-input" type="text" onkeyup="auto.getList(this)" placeholder="Type your keywords"/>
    </div>
    <ul id="form-autocomplete">
    </ul>
</div>
```

API
===
Constructor AutoComplete
```javascript
var auto = new AutoComplete({
    inputElementId: '', // input text Element ID
    listElementId: '', // list view Element ID, usually <ul>
    formList: [], // [Array] You can initial list here, default is null Array
    selectListCB: callback, // callback function when select a list item,
    deleteCB: callback, // callback function when delete a item
});
```
AutoComplete.setList

>  Setup formList manually

```javascript
auto.setList([ /* Array List here */]);
```

Constructor.getList

> Show the list for user to select

```javascript
auto.geList(value); // value is a input value
```
Constructor.showList

> Show the list (display block)

Constructor.hideList

> Hide the list (display none)

Constructor.getFormList

> return the formList selected

Screenshot
===
![screen shot 2014-06-05 at 11 42 15 pm](https://cloud.githubusercontent.com/assets/2560096/3189833/f3d6f12c-ecc7-11e3-8e2d-49b85d4f85c5.png)

![screen shot 2014-06-05 at 11 42 39 pm](https://cloud.githubusercontent.com/assets/2560096/3189836/f7c14ca6-ecc7-11e3-9b0e-2b34f26628d0.png)

![screen shot 2014-06-05 at 11 43 31 pm](https://cloud.githubusercontent.com/assets/2560096/3189851/12633d08-ecc8-11e3-9ce6-4e40e35195e5.png)

![video](https://cloud.githubusercontent.com/assets/2560096/3182747/a7671cb4-ec58-11e3-9694-276be9635316.gif)
