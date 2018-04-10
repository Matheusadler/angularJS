angular.module("learnJS").controller("novoContatoJuridicoCtrl", function ($scope, contatosJuridicoAPI, operadorasAPI, $location){
    var carregarOperadoras = function () {
        operadorasAPI.getOperadoras().then(function (response) {
            $scope.operadoras = response.data;
        });
    };

    $scope.addContatos = function (contato) {
        //pegaId(contatos);
        contato.id = "";
        contatosJuridicoAPI.addContatos(contato).then(function (response) {
            delete $scope.contato;
            $scope.contatoForm.$setPristine();
            $location.path("/contatosJuridico");
        });
    };
    carregarOperadoras();
});