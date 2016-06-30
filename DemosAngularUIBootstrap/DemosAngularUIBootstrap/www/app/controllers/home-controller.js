(function () {
    "use strict";

    angular.module("demoUI").controller("homeController", [HomeController]);


    function HomeController() {
        var vm = this;

        vm.titulo = "Bem vindo à Home Controller";

    }

}());