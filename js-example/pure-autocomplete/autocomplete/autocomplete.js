(function () {

    // ====================
    // Prototype
    // ====================
    function AutoComplete(options) {

        // public variable
        this.inputEl = document.getElementById(options.inputElementId);
        this.formEl = document.getElementById(options.listElementId);
        this.formLi = options.formList || [];
        this.selectedInput = [];

        // callback method
        this.selectListCB = options.selectListCB || null;
        this.deleteCB = options.deleteCB || null;

        this.hideList();
    }

    AutoComplete.prototype.setList = function (data) {
        var self = this;

        for (var i = 0; i < data.length; i++) {
            self.formLi[i] = self.formEl.appendChild(createLi(data[i]));
        }

        this.actionLi();
    };

    AutoComplete.prototype.getList = function (value) {
        var self = this,
            value = value || '',
            showEl = [],
            hideEl = [];

        if (!value) {
            this.hideList();
            return;
        }

        for (var i = 0; i < self.formLi.length; i++) {
            var text = self.formLi[i].innerText || self.formLi[i].textContent;
            console.log(text)
            var testReg = new RegExp('^' + value);
            if (testReg.test(text)) {
                showEl.push(self.formLi[i]);
                self.formLi[i].style.display = 'block';
            } else {
                hideEl.push(self.formLi[i]);
                self.formLi[i].style.display = 'none';
            }
        }
console.log('show')
        console.log(showEl)
        if (showEl.length == 0) return;
        this.showList();
console.log('show2')
        // first element li
        showEl[0].style.color = 'white';
        showEl[0].style.backgroundColor = 'black';


        keydownEvent(13, function () { // enter
            if (showEl[0].innerText == self.inputEl.value || showEl[0].textContent == self.inputEl.value) {
                showEl[0].onclick();

                RemoveKeyDownEvent();
            }

        });

    };

    AutoComplete.prototype.actionLi = function () {
        var self = this;
        for (var i = 0; i < self.formLi.length; i++) {
            self.formLi[i].onclick = function () {
                var text = this.innerText || this.textContent;
                var Xsymbol = self.inputEl.parentNode.insertBefore(createSpan(text), self.inputEl);

                self.inputEl.value = '';

                this.style.color = 'black';
                this.style.backgroundColor = 'white';
                self.selectedInput.push(text);

                Xsymbol.getElementsByTagName('a')[0].onclick = function () {
                    this.parentNode.remove();
                    self.selectedInput.splice(self.selectedInput.indexOf(text), 1);

                    if (typeof self.deleteCB === 'function') {
                        self.deleteCB(text);
                    }
                };
                self.hideList();

                self.inputEl.focus();

                if (typeof self.selectListCB === 'function') {
                    self.selectListCB(text);
                }
            };
        }
    };

    AutoComplete.prototype.showList = function () {
        this.formEl.style.display = 'block';
    };

    AutoComplete.prototype.hideList = function () {
        this.formEl.style.display = 'none';
    };

    AutoComplete.prototype.getFormList = function () {
        return this.selectedInput;
    };

    function createSpan(text) {
        var spanTag = document.createElement('span');

        spanTag.class = '';
        spanTag.innerHTML = text + '<a href="javascript:void(0);"><i> X </i></a>';

        return spanTag;
    }

    function createLi(text) {
        var liTag = document.createElement('li');

        liTag.class = '';
        liTag.innerHTML = text;

        return liTag;
    }

    function keydownEvent(keyCode, fn) {
        document.onkeydown = function (e) {
            var charCode = e.charCode || e.keyCode;

            if (charCode == keyCode) {
                fn();
            }
        }
    }

    function RemoveKeyDownEvent() {
        document.onkeydown = null;
    }

    // overwrite window property AutoComplete
    window.AutoComplete = AutoComplete;

})();