
angular.module("learnJS").controller("detalhesContatoFisicoCtrl", function ($scope, contato) {
    console.log(contato);
    $scope.contato = contato;
});