(function () {
    "use strict";

    angular.module("demoUI").controller("tabsController", TabsController);


    function TabsController() {
        this.title = "Demo Tabs";

        this.model = {
            name: 'Tabs'
        };

    }

}());