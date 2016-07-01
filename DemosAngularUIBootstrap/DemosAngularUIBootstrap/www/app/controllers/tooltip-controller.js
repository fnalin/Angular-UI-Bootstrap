(function () {
    "use strict";

    angular.module("demoUI").controller("toolTipController", ToolTipController);

    ToolTipController.$inject = ["$sce"];
    function ToolTipController($sce) {
        this.title = "Demo ToolTip";

        this.dynamicTooltip = 'Hello, World!';
        this.dynamicTooltipText = 'dynamic';
        this.htmlTooltip = $sce.trustAsHtml('I\'ve been made <b>bold</b>!');
        this.placement = {
            options: [
              'top',
              'top-left',
              'top-right',
              'bottom',
              'bottom-left',
              'bottom-right',
              'left',
              'left-top',
              'left-bottom',
              'right',
              'right-top',
              'right-bottom'
            ],
            selected: 'top'
        }
    }
}());