(function () {
    "use strict";

    angular.module("demoUI").controller("dropDownController", dropDownCtrl);

    function dropDownCtrl(){
        this.title = "DropDown";


        this.edit = function () {
            alert("Vc clicou no edit");
        }

        this.config = function () {
            alert("Vc clicou no config");
        }

        this.delete = function () {
            alert("Vc clicou no delete");
        }

    }

}());