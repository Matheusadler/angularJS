var http = require('http');

http.createServer(function (req, res) {
    res.write(
        '<html>' +
            '<head>' +
                '<title>Hello World</title>' +
                '<meta charset="UTF-8">' +
                '<link rel="stylesheet" type="text/css" href="css/bootstrap.css">' +
                '<link rel="stylesheet" type="text/css" href="css/app.css">' +
                '<title>Learn AngulaJS</title>' +
                '<script src="../node_modules/angular/angular.min.js"></script>' +
                '<script src="js/app.js"></script>' +
                '<script src="js/controllers/listaTelefonicaCtrl.js"></script>' +
            '</head>' +
            '<body ng-controller="listaTelefonicaCtrl">' +
                '<div class="jumbotron">' +
                    '<h4>{{app}}</h4>' +
                    '<input class="form-control" type="text" ng-model="Busca" placeholder="O que você está buscando?">' +
                    '<table ng-show="contatos.length > 0" class="table">' +
                        '<tr>'+
                            '<th>' +
                                '<a href="" ng-click="ordenarPor("nome")">Nome</a>' +
                            '</th>' +
                            '<th>Telefone</th>' +
                            '<th>Operadora</th>' +
                            '<th>Data de aniversário</th>' +
                        '</tr>' +
                        '<tr ng-class="{"selecionado negrito": contato.selecionado}" ng-repeat="contato in contatos | filter: Busca | orderBy: criterioDeOrdenacao:direcaoDaOrdenacao ">' +
                            '<td><input type="checkbox" ng-model="contato.selecionado"/></td>' +
                            '<td>{{contato.nome}}</td>'+
                            '<td>{{contato.telefone}}</td>'+
                            '<td>{{contato.operadoras.nome}}</td>'+
                            '<td>{{contato.data | date: "dd/MM"}}</td>'+
                        '</tr>'+
                '</table>'+
                '<hr/>'+
                '<form name="contatoForm">'+
                    '<input class="form-control" type="text" ng-model="contato.nome" name="nome" placeholder="Nome" ng-required="true">'+
                    '<input class="form-control" type="text" ng-model="contato.telefone" name="telefone" placeholder="Telefone" ng-required="true" ng-pattern="/^\d{4,5}-\d{4}$/">'+
                    '<input class="form-control" type="text" name="data" placeholder="dd/MM" required pattern="(0[1-9]|1[0-9]|2[0-9]|3[01])/(0[1-9]|1[012])" title="Enter a date in this format YYYY-MM-DD" ng-model="contato.data" name="data" ng-required="true"/>'+
                '</form>'+
                '<select ng-model="contato.operadoras" ng-options="operadora.nome for operadora in operadoras | orderBy: "nome""">'+
                    '<option value="">Selecione uma operadora</option>'+
                '</select>'+
                '</form>'+
                '<div ng-show="contatoForm.nome.$invalid && contatoForm.nome.$dirty" class="alert alert-danger">'+
                    'Por favor, preencha o campo nome!'+
                '</div>'+
                '<div ng-show="contatoForm.telefone.$error.required && contatoForm.telefone.$dirty" class="alert alert-danger">'+
                    'Por favor, preencha o campo telefone!'+
                '</div>'+
                '<div ng-show="contatoForm.telefone.$error.pattern" class="alert alert-danger">'+
                    'Por favor, o campo telefone deve ter o formato DDDDD-DDDD!'+
                '</div>'+
                '<div ng-show="contatoForm.data.$error.required && contatoForm.data.$dirty" class="alert alert-danger">'+
                    'Por favor, preencha o campo data de aniversário!'+
                '</div>'+
                '<div ng-show="contatoForm.data.$error.pattern" class="alert alert-danger">'+
                    'Por favor, o campo data de aniversário deve ter o formato dd/MM!'+
                '</div>'+
                '<button class="btn btn-primary" ng-click="addContatos(contato)" ng-disabled="contatoForm.$invalid">Adicionar Contato</button>'+
                '<button class="btn btn-danger" ng-click="delContatos(contatos)" ng-disabled="!contatoSelecionado(contatos)">Deletar Contato</button>'+
                <!--<input class="form-control-range" type="submit" ng-click="addContatos(contato)" value="Adicionar">-->
                '</div>'+
                '<div class="text-center">Criado por Adler</div>'+
            '</body>' +
        '</html>'
    );
    res.end();
}).listen(3412);