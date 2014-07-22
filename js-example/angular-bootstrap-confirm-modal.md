        
        // -----------------------------------
        // ng-confirm
        //
        // modal-content : ng-confirm="blablabla content"
        // modal-title : ng-confirm-title="iamtitle"
        //
        // -----------------------------------
        .directive('ngConfirm', ['$injector', function ($injector) {
            return {
                terminal: true,
                link: function postLink(scope, element, attr) {

                    // Don't ask confirm if given null
                    if (!attr.ngConfirm) {
                        return;
                    }

                    var $compile = $injector.get('$compile'),
                        $timeout = $injector.get('$timeout'),
                        $utility = $injector.get('$utility'),
                        _ = $utility._,
                        clickAction = attr.ngClick,
                        msg = attr.ngConfirm,
                        title = attr.ngConfirmTitle || 'Default',
                        modal = ['<form class="modal fade" id="JS-Confirm">',
                            '<div class="modal-dialog">',
                            '<div class="modal-content">',
                            '<div class="modal-header">',
                            '<button type="button" class="close" aria-hidden="true">&times;</button>',
                            '<h4 class="modal-title">', title , '</h4>',
                            '</div>',
                            '<div class="modal-body">', msg , '</div>',
                            '<div class="modal-footer">',
                            '<button type="button" class="btn btn-default">', _('Cancel'), '</button>',
                            // $event only use in ng-click
                            '<input type="submit" class="btn btn-primary" ng-click="', clickAction, '" value="', _('Confirm'), '"/>',
                            '</div>',
                            '</div>',
                            '</div>',
                            '</form>'].join('');

                    element.off('click');
                    element.on('click', function (e) {
                        e.preventDefault();
                        var view = $compile(modal)(scope);
                        $('body').append(view);

                        $timeout(function () {
                            $('#JS-Confirm').modal('show');
                            $('#JS-Confirm').on('shown.bs.modal', function () {
                                $('#JS-Confirm').find('.btn.btn-primary').focus();
                            });
                            $('#JS-Confirm').on('hidden.bs.modal', function () {
                                $('#JS-Confirm').remove();
                            });
                        });
                    });
                }
            };
        }])
