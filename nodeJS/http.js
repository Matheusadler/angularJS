var router = require('./router');

var app = router(3412);

var operadoras = [
    {nome: "Oi", codigo: 14, categoria: "Celular"},
    {nome: "Vivo", codigo: 15, categoria: "Celular"},
    {nome: "Claro", codigo: 25, categoria: "Celular"},
    {nome: "Embratel", codigo: 17, categoria: "Fixo"},
    {nome: "GVT", codigo: 39, categoria: "Fixo"},
    {nome: "Tim", codigo: 41, categoria: "Celular"}
];

var contatos = [
    {id: 1, nome: "Adler", telefone: "98704-5344", data: "25/01", operadoras: operadoras[0]},
    {id: 2, nome: "Matheus", telefone: "92104-5344", data: "25/05", operadoras: operadoras[1]},
    {id: 3, nome: "Gabriel", telefone: "98709-5344", data: "25/08", operadoras: operadoras[2]}
];

app.interceptor(function (req, res, next) {
    //console.log('executando interceptor 1');
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    res.setHeader('Access-Control-Allow-Methods', 'DELETE');
    next();
});

app.interceptor(function (req, res, next) {
    //console.log('executando interceptor 2');
    res.setHeader('Content-Type', 'application/json;charset=UTF-8');
    next();
});

app.get('/operadoras', function (req, res) {
    res.write(JSON.stringify(operadoras));
    res.end();
});

app.get('/contatos', function (req, res) {
    res.write(JSON.stringify(contatos));
    res.end();
});

app.post('/contatos', function (req, res) {
    var contato = JSON.parse(req.body);
    var maxId = contatos.map(function (contato) {
        return contato.id;
    }).reduce(function (maxId, idContato) {
        return Math.max(maxId, idContato)
    });
    contato.id = ++maxId;
    contatos.push(contato);
    res.end();
});

app.delete('/contatos', function (req, res) {
    var idContatos = req.body;
    contatos = contatos.filter(function (contato) {
        return !idContatos.includes(contato.id);
    });
    res.end();
});

app.options('/contatos', function (req, res) {
    res.end();
});

