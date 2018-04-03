
angular.module("learnJS").controller("novoContatoCtrl", function ($scope, contatosAPI, operadorasAPI, $location) {
    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        });
    };

    $scope.addContatos = function (contato) {
        //pegaId(contatos);
        contato.id = "";
        contatosAPI.addContatos(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatos");
        });
    };
    carregarOperadoras();
});