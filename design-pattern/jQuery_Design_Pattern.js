/**
 * The Composite Pattern
 *
 * The Composite pattern describes a group of objects that can be treated in the same way a single instance of an object may be.
 */
 
 // Single elements
 $('#singleItem').addClass('active');
 
 // Collections
 $('.item').addClass('active');
 
 /**
 * The Adapter Pattern
 *
 * The Adapter pattern translates an interface for an object or class into an interface compatible with a specific sytem.
 */
 
 // cross browser opacity
 // Setting opacity
 $('.container').css({opacity: .5});
 
 /**
 * The Facade Pattern
 *
 * The Face pattern provides a simpler abstracted interface to a larger body of code
 */
 
 $.ajax(); // into =>
 $.get();
 $.post();
 $.getJSON();
 $.getScript();
 // all using $.ajax()
 
 /**
 * The Observer Pattern
 *
 * The Observer pattern is where the objects in a system may subscribe to other objects and be notified by them when an event of interest occurs.
 */
 
 $( document ).on('something', function () {});
 $( document ).trigger('something');
 
 // or
 $.publish();
 $.subscribe();
 $.unsubscribe();
 
 /**
 * The Iterator Pattern
 *
 * The Iterator pattern access the elements of an aggregate object sequentially without needing to expose its underlying form.
 */
 
 $.each([1,2,4], function (index, value) {});
 $('li').each(function (index) {});
 
 /**
 * Lazy Initialization
 *
 * Lazy initialization is a design pattern that allows us to delay expensive processes until the first instance they are needed.
 */
 $(document).ready(function () {});;
 
 // or google lazy load
 
 /**
 * The Proxy Pattern
 *
 * The Proxy pattern control the access and context behind an object.
 */
 $.proxy(function () {}, this);
 
 // in vanilla js, use fn.apply(context, []), fn.call(content,var);
 
 /**
 * The Builder Pattern
 *
 * The Builder
 */
 $('<div>asdf</div>').appendTo('body');
 $('#asdf').html('Hello');
