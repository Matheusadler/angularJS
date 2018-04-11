
angular.module("learnJS").controller("detalhesContatoJuridicoCtrl", function ($scope, contato) {
    console.log(contato);
    $scope.contato = contato;
});