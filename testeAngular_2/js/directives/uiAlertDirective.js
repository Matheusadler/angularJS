angular.module("learnJS").directive("uiAlert", function () {
   return{
       restrict: "E",
       templateUrl: "js/view/alert.html",
       replace: true,
       scope:{
            title: "@",
           message: "="
       }
   };
});