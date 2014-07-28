this is the pseducode (own by me)

```js
temp = model[_start - 1];
model.splice(_start - 1, 1);
model.splice(_update - 1, 0, temp);

 if (Math.abs(_update - _start) === 1) { // swap
    temp = model[_update - 1];
    model[_update - 1] = model[_start - 1];
    model[_start - 1] = temp;
 }
 else if (_start > _update) {
    temp = model[_start - 1];
    model.splice(_start - 1, 1);
    model.splice(_update - 1, 0, temp);
 } else if (_start < _update) {
    temp = model[_start - 1];
    model.splice(_start - 1, 1);
    model.splice(_update - 2, 0, temp);
 }
```

But in angularjs directive, there is scope.$phase problem

It can just short for, remember given `model.$apply()` to apply scope
```js
temp = model[_start - 1];
model.splice(_start - 1, 1);
model.splice(_update - 1, 0, temp);

model.$apply();
```
