angularjs 2.0 Concept
===

RIP - controller, DDO, $scope, angular.module, jQLite

## 1.3 -> 2.0 Reason

1. Template {{ ax }}, Controller $scope.ax - We need to change both
2. Too many modules
3. Server Binding (cshtml {{ @Model.something }})

2.0 => Backend

## Features
1. Component Directive (View + Ctrl)
2. Decorator Directive  (ng-model, ng-show, ng-bind ... ) 已存在HTML裡＋Behavior
3. Template Directive (ng-repeat, ng-include) - translate HTML -> reusable template

## Sample Code

```js
@ComponentDirective({
    selector: 'tab-container',
    directive: [Ng Repeat]
})
export class TabContainer {
    constructor(panes:Query<Pane>){
       this.panes = panes;
       }
       select(selected Pane:Pane){...}
    }
}
```

## Reference

http://eisenbergeffect.bluespire.com/all-about-angular-2-0/



