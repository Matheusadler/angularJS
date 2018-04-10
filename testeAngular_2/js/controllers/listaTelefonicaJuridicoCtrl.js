
angular.module("learnJS").controller("listaTelefonicaJuridicoCtrl", function ($scope, contatosJuridicoAPI, operadorasAPI) {
    $scope.app = "Lista Telefônica";
    $scope.contatos = [];
    $scope.operadoras = [];

    var carregarContatos = function () {
        contatosJuridicoAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
        }).catch(function (data) {
            $scope.title = "Ops! Aconteceu um problema!";
            $scope.message = "Não foi possível carregar os dados!";
        })
    };

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        });
    };

    $scope.delContatos = function (contatos) {

        var idContatos = contatos.filter(function (contato) {
            return contato.selecionado;
        }).map(function (contato) {
            return contato.id;
        });

        contatosJuridicoAPI.delContatos(idContatos).then(function (response) {
            $scope.contatos = $scope.contatos.filter(function (contato) {
                return !idContatos.includes(contato.id);
            });
        });
    };
    var counter = 0;
    $scope.contatoSelecionado = function (contatos) {
        console.log(counter++);
        return contatos.some(function (contato) {
            return contato.selecionado;
        });
    };
    $scope.ordenarPor = function (campo) {
        $scope.criterioDeOrdenacao = campo;
        $scope.direcaoDaOrdenacao = !$scope.direcaoDaOrdenacao;
    };
    carregarContatos();
    carregarOperadoras();
});