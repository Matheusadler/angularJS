angular.module("learnJS").factory("errorInterceptor", function ($q) {
    return{
        reponseError: function (rejection) {
            console.log(rejection);
            if (rejection === 404){
                $location.path("/error");
            }
            return $q.reject(rejection);
        }
    }
});