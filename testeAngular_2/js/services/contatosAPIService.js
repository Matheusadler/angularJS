angular.module("learnJS").service("contatosAPI", function ($http, config) {
    this.getContatos = function () {
        return $http.get(config.baseUrl + "/contatos");
    };
    
    this.addContatos = function (contato) {
        //console.log(contato.id);
        return $http.post(config.baseUrl + "/contatos", contato);
    };

    this.delContatos = function (ids) {
        return $http.delete(config.baseUrl + "/contatos", {data: ids});
    };
});