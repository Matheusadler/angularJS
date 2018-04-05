angular.module("learnJS").config(function ($routeProvider) {
    $routeProvider.when("/contatos", {
        templateUrl: "js/view/contatos.html",
        controller: "listaTelefonicaCtrl"
    });
    $routeProvider.when("/novoContato", {
        templateUrl: "js/view/novoContato.html",
        controller: "novoContatoCtrl"
    });
    $routeProvider.when("/error", {
        templateUrl: "js/view/error.html"
    });
    $routeProvider.when("/detalheContato/:id", {
        templateUrl: "js/view/detalheContato.html",
        controller: "detalhesContatoCtrl",
        resolve:{
            contato: function (contatosAPI, $route) {
                return contatosAPI.getContatosId($route.current.params.id)
            }
        }
    
    });
    $routeProvider.otherwise({redirectTo: "/contatos"});
});