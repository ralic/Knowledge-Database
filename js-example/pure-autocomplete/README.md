Autocomplete
===

Completely Free, without jQuery or any plugin.

Focus on `tagsinput` and `autocomplete`, but *small amount* and *known data*

Requirement
===

Modern Browser is required

Open up a `http://localhost` or just `file://` server

>  node web-server.js

How to use
===
```html
<!-- include autocomplete form css -->
<link rel="stylesheet" href="autocomplete.css"/>
<!-- include autocomplete js prototype -->
<script src="/autocomplete/autocomplete.js"></script>
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
Constructor

Constructor.setList

Constructor.getList

Constructor.showList

Constructor.hideList

Constructor.getFormList


