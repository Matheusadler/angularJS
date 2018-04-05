
angular.module("learnJS").controller("detalhesContatoCtrl", function ($scope, contato) {
    console.log(contato);
    $scope.contato = contato;
});