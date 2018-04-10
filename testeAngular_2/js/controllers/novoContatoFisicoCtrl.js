
angular.module("learnJS").controller("novoContatoFisicoCtrl", function ($scope, contatosFisicoAPI, operadorasAPI, $location) {
    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        });
    };

    $scope.addContatos = function (contato) {
        //pegaId(contatos);
        contato.id = "";
        contatosFisicoAPI.addContatos(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatosFisico");
        });
    };
    carregarOperadoras();
});