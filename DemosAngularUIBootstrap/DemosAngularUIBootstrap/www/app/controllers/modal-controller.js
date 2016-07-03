(function () {
    "use strict";


    angular.module("demoUI").controller("modalController", ModalController);

    ModalController.$inject = ["$uibModal", "$log"];
    function ModalController($uibModal, $log) {
        var vm = this;
        vm.title = "Demo Modal";
        vm.items = ['item1', 'item2', 'item3'];
        vm.animationsEnabled = true;

        vm.open = function (size) {

            var modalInstance = $uibModal.open({
                animation: vm.animationsEnabled,
                templateUrl: 'pages/myModalContent.html',
                controller: 'modalInstanceCtrl as self',
                size: size,
                resolve: {
                    items: function () {
                        return vm.items;
                    },
                    //oi: function () { alert('oioioioioi');}
                }
            });

            modalInstance.result.then(function (selectedItem) {
                vm.selected = selectedItem;
                alert("ação de confirmação");
            }, function () {
                $log.info('Modal dismissed at: ' + new Date());
            });
        }

        vm.toggleAnimation = function () {
            vm.animationsEnabled = !vm.animationsEnabled;
        };
    }

}());