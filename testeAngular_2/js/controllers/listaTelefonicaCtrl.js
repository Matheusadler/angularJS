
angular.module("learnJS").controller("listaTelefonicaCtrl", function ($scope, contatosAPI, operadorasAPI) {
    $scope.app="Lista Telefônica";
    $scope.contatos = [];
    $scope.operadoras = [];

    var carregarContatos = function () {
        contatosAPI.getContatos().then(function (response) {
            $scope.contatos = response.data;
        }).catch(function (data) {
            $scope.message = "Aconteceu um problema: " + data;
        })
    };

    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        });
    };

    $scope.addContatos = function (contato) {
        contatosAPI.addContatos(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            carregarContatos();
        });
    };

    $scope.delContatos = function (contatos) {

        var idContatos = contatos.filter(function (contato) {
            return contato.selecionado;
        }).map(function (contato) {
            return contato.id;
        });

        contatosAPI.delContatos(idContatos).then(function (response) {
            $scope.contatos = $scope.contatos.filter(function (contato) {
                return !idContatos.includes(contato.id);
            });
        });
    };
    $scope.contatoSelecionado = function (contatos) {
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