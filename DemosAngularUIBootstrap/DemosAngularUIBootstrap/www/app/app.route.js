(function () {
    "use strict";

    angular.module("demoUI").config(["$routeProvider", ConfigRotas]);

    function ConfigRotas($routeProvider) {

        $routeProvider

            .when("/", {
                templateUrl: "pages/home.html",
                controller: "homeController",
                controllerAs:"vm"
            });
    };

}());