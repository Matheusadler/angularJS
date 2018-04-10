angular.module("learnJS").config(function ($routeProvider) {
    $routeProvider.when("/telaInicial", {
        templateUrl: "js/view/telaInicial.html"
    });
    $routeProvider.when("/contatosFisico", {
        templateUrl: "js/view/contatosFisico.html",
        controller: "listaTelefonicaFisicoCtrl"
    });
    $routeProvider.when("/contatosJuridico", {
        templateUrl: "js/view/contatosJuridico.html",
        controller: "listaTelefonicaJuridicoCtrl"
    });
    $routeProvider.when("/novoContatoFisico", {
        templateUrl: "js/view/novoContatoFisico.html",
        controller: "novoContatoFisicoCtrl"
    });
    $routeProvider.when("/novoContatoJuridico", {
        templateUrl: "js/view/novoContatoJuridico.html",
        controller: "novoContatoJuridicoCtrl"
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
    $routeProvider.otherwise({redirectTo: "/contatosFisico"});
});