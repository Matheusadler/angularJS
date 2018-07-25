angular.module("learnJS").config(function ($routeProvider) {
    $routeProvider.when("/signin", {
        templateUrl: "js/view/signin.html",
        controller: "appCtrl"
    });
    $routeProvider.when("/telaInicial", {
        templateUrl: "js/view/telaInicial.html",
        controller: "appCtrl"
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
    $routeProvider.when("/detalheContatoFisico/:id", {
        templateUrl: "js/view/detalheContatoFisico.html",
        controller: "detalhesContatoFisicoCtrl",
        resolve:{
            contato: function (contatosFisicoAPI, $route) {
                return contatosFisicoAPI.getContatosId($route.current.params.id)
            }
        }
    
    });
    $routeProvider.when("/detalheContatoJuridico/:id", {
        templateUrl: "js/view/detalheContatoJuridico.html",
        controller: "detalhesContatoJuridicoCtrl",
        resolve:{
            contato: function (contatosJuridicoAPI, $route) {
                return contatosJuridicoAPI.getContatosId($route.current.params.id)
            }
        }

    });
    $routeProvider.otherwise({redirectTo: "/signin"});
});