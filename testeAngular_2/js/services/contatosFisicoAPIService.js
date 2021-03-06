angular.module("learnJS").service("contatosFisicoAPI", function ($http, config) {
    this.getContatos = function () {
        return $http.get(config.baseUrl + "/contatosFisico");
    };

    this.getContatosId = function (id) {
        return $http.get(config.baseUrl + "/contatosFisico").then(function (response) {
            return response.data
        }).then(function (contatos) {
            return contatos.reduce(function (contatoReal, contato) {
                if (contato.id == id){
                    contatoReal = contato;
                }
                return contatoReal;
            })
        });
    };
    
    this.addContatos = function (contato) {
        //console.log(contato.id);
        return $http.post(config.baseUrl + "/contatosFisico", contato);
    };

    this.delContatos = function (ids) {
        return $http.delete(config.baseUrl + "/contatosFisico", {data: ids});
    };
});