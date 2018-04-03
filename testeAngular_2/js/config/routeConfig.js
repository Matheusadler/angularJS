angular.module("learnJS").config(function ($routeProvider) {
    $routeProvider.when("/contatos", {
        templateUrl: "js/view/contatos.html",
        controller: "listaTelefonicaCtrl"
    });
    $routeProvider.when("/novoContato", {
        templateUrl: "js/view/novoContato.html",
        controller: "novoContatoCtrl"
    });
    $routeProvider.otherwise({redirectTo: "/contatos"});
});