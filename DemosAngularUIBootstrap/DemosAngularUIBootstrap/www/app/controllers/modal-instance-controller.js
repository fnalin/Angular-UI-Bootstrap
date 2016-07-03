(function () {
    "use strict";

    angular.module("demoUI").controller("modalInstanceCtrl", ModalInstanceCtrl);

    ModalInstanceCtrl.$inject = ["$uibModalInstance", "items"];
    function ModalInstanceCtrl($uibModalInstance, items) {
        var self = this;

        self.items = items;
        self.selected = {
            item: self.items[0]
        };

        self.ok = function () {
            $uibModalInstance.close(self.selected.item);
        };

        self.cancel = function () {
            $uibModalInstance.dismiss('cancel');
        };
    }

}());