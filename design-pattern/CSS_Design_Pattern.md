example: SMACSS OOCSS

SMACSS
===

**Base** - CSS Reset/Normalize (Don't use !important)

**Layout** - Using ID Selector (#header #footer #menu_bar #article #sidebar)

**Module** - Avoid element selectors, Reuse, Don't use ID selector
```html
<div class="fld">
    <span class="fld-name">Folder Name</span>
    <span class="fld-items">(40 items)</span>
</div>
```
```css
.fld > .fld-name {
    padding-left: 20px;
    font-size: 20px;
}
.fld > .fld-items {
    font-size: 12px;
}
```

**State** - Using !important(?), Combining Rules with Modules (.active .is-tab-active .selected .success .error)

```html
<div class="tab"></div>
<!-- using state -->
<div class="is-tab-active"></div>
```

**Theme** - Include Multiple CSS File (include another CSS File)

```html
<link rel="stylesheet" href="main.css"/>
<!-- this is a include theme -->
<link rel="stylesheet" href="xmas-theme.css"/>
```
