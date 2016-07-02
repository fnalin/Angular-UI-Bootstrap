(function () {
    "use strict";

    angular.module("demoUI").config(ConfigRotas);


    ConfigRotas.$inject = ["$routeProvider"];
    function ConfigRotas($rota) {

        $rota

            .when("/", {
                templateUrl: "pages/home.html",
                controller: "homeController",
                controllerAs: "vm"
            })

            .when("/dropdown", {
                templateUrl: "pages/dropdown.html",
                controller: "dropDownController",
                controllerAs: "vm"
            })

            .when("/collapse", {
                templateUrl: "pages/collapse.html",
                controller: "collapseController",
                controllerAs: "vm"
            })

            .when("/tooltip", {
                templateUrl: "pages/tooltip.html",
                controller: "toolTipController",
                controllerAs: "vm"
            })

             .when("/tabs", {
                 templateUrl: "pages/tabs.html",
                 controller: "tabsController",
                 controllerAs: "vm"
             })

            .otherwise({
                redirectTo: '/'
            });
    };

}());