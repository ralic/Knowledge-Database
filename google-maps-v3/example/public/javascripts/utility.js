(function () {

    myApp.provider('utility', function () {

        this.spinner = {
            on: function () {
                $('#loading').show();
            },
            off: function () {
                $('#loading').hide();
            }
        };

        this.$get = [function () {
            return {
                spinner: this.spinner
            }
        }];
    });

})();