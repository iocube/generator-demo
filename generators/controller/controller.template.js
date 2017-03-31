(function() {
    "use strict";

    angular
    .module('<%= module %>')
    .controller('<%= name %>Controller', <%= name %>Controller);

    function <%= name %>Controller() {
        var vm = this;
    }
})();
