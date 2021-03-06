angular.module("ui", []);

angular.module("ui").run(function ($templateCache) {
    $templateCache.put("js/view/accordion.html", "<button class=\"btn_accordion btn-secondary\" class=\"ui-accordion-title\" ng-click=\"open()\">{{title}}</button>\n" +
        "<div class=\"ui-accordion-content\" ng-show=\"isOpened\" ng-transclude></div>\n" +
        "<br/>");
});

angular.module("ui").run(function ($templateCache) {
    $templateCache.put("js/view/alert.html", "<div class=\"ui-alert\">\n" +
        "    <div class=\"ui-alert-title\">\n" +
        "        {{title}}\n" +
        "    </div>\n" +
        "    <div class=\"ui-alert-message\">\n" +
        "        {{message}}\n" +
        "    </div>\n" +
        "</div>");
});

angular.module("ui").directive("uiAccordions", function () {
    return{
        controller: function ($scope, $element, $attrs) {
            var accordions = [];
            this.registerAccordion = function (accordion) {
                accordions.push(accordion);
            };
            this.closeAll = function () {
                accordions.forEach(function (accordion){
                    accordion.isOpened = false;
                });
            };
        }
    };
});
angular.module("ui").directive("uiAccordion", function () {
    return{
        templateUrl: "js/view/accordion.html",
        transclude: true,
        scope: {
            title: "@"
        },
        require: "^^uiAccordions",
        link: function (scope, element, attrs, ctrl) {
            ctrl.registerAccordion(scope);
            scope.isOpened = false;
            scope.open = function () {
                if (scope.isOpened == true){
                    ctrl.closeAll();
                } else if (scope.isOpened == false){
                    ctrl.closeAll();
                    scope.isOpened=true;
                }
            };
        }
    };
});
/*
angular.module("ui").directive("uiDate", function () {
    return{
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatDate = function (date) {
                if (date){
                    date = date.replace(/[^0-9]+/g, "");
                    if (date.length > 2){
                        date = date.substring(0,2) + "/" + date.substring(2, 4);
                    }
                }
                return date;
            };
            element.bind("keyup", function () {
                ctrl.$setViewValue(_formatDate(ctrl.$viewValue));
                ctrl.$render();
            });
        }
    };
});
*/
angular.module("ui").directive("uiAlert", function () {
    return{
        restrict: "E",
        templateUrl: "js/view/alert.html",
        replace: true,
        scope:{
            title: "=",
            message: "="
        }
    };
});