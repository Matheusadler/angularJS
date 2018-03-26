angular.module("learnJS").directive("uiDate", function () {
    return{
        require: "ngModel",
        link: function (scope, element, attrs, ctrl) {
            var _formatDate = function (date) {
                date_dd = date.replace(/[^0-9]+/g, "");
                date_MM = date.replace(/[^0-9]+/g, "");
                if (date.length > 2){
                    date = date.substring(0,2) + "/" + date.substring(2, 4);
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