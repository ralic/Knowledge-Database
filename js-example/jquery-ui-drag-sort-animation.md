jquery ui drag sort animation
===

hard code =(

```html
<ul id="sortable">
    <li>span>Item1</span></li>
    <li><span>Item2</span></li>
    <li><span>Item3</span></li>
</ul>


<ul id="sortable2">
</ul>
```

```css
#sortable li {
    float: left;
    position: relative;
    z-index: 5;
}

#sortable2 li {
    position: absolute;
    z-index: 1;
}
```

```js
// loop through the original items...
var update = function () {
    jQuery('#sortable2').html('');
    jQuery("#sortable li").each(function () {

        // clone the original items to make their
        // absolute-positioned counterparts...
        var item = jQuery(this);
        var item_clone = item.clone();
        // 'store' the clone for later use...

        item.data("clone", item_clone);


        // set the initial position of the clone
        var position = item.position();
        item_clone.css("left", position.left);
        item_clone.css("top", position.top);
        item_clone.css('position', '');
        item_clone.css('zIndex', '');
        // append the clone...
        jQuery("#sortable2").append(item_clone);

        var isClick = false;
        jQuery(this).click(function () {
            if (!isClick) {
                $(this).css('backgroundColor', 'blue');
                selected = this;
            } else {
                $(this).css('backgroundColor', 'white');
                selected = null;
            }
            isClick = !isClick;

        });
    });
};
$( "#sortable" ).sortable({
    revert: 300,
    // on sorting start, hide the original items...
    // only adjust the visibility, we still need
    // their float positions..!
    start: function(e, ui){
        // loop through the items, except the one we're
        // currently dragging, and hide it...
        ui.helper.addClass("exclude-me");
        jQuery("#sortable li:not(.exclude-me)")
                .css("visibility", "hidden");

        // get the clone that's under it and hide it...
        ui.helper.data("clone").hide();
    },

    stop: function(e, ui){
        // get the item we were just dragging, and
        // its clone, and adjust accordingly...
        jQuery("#sortable li.exclude-me").each(function(){
            var item = jQuery(this);
            var clone = item.data("clone");
            var position = item.position();

            // move the clone under the item we've just dropped...
            clone.css("left", position.left);
            clone.css("top", position.top);
            clone.show();

            // remove unnecessary class...
            item.removeClass("exclude-me");
        });

        // make sure all our original items are visible again...
        setTimeout(function () {
            jQuery("#sortable li").css("visibility", "visible");
        },500);

    },

    // here's where the magic happens...
    change: function(e, ui){
        // get all invisible items that are also not placeholders
        // and process them when ordering changes...
        jQuery("#sortable li:not(.exclude-me, .ui-sortable-placeholder)").each(function(){
            var item = jQuery(this);
            var clone = item.data("clone");

            // stop current clone animations...
            clone.stop(true, false);

            // get the invisible item, which has snapped to a new
            // location, get its position, and animate the visible
            // clone to it...
            var position = item.position();
            clone.animate({
                left: position.left,
                top:position.top}, 500);
        });
    }

});
```

very hard code , bad =( why jquery-ui doesn't implement this natively?
