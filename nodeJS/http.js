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

var contatosFisico = [
    {id: 1, nome: "Adler", cpf: "05140364352", telefone: "98704-5344", data: "25/01", operadoras: operadoras[0]},
    {id: 2, nome: "Matheus", cpf: "06515985269", telefone: "92104-5344", data: "25/05", operadoras: operadoras[1]},
    {id: 3, nome: "Gabriel", cpf: "03562589574", telefone: "98709-5344", data: "25/08", operadoras: operadoras[2]}
];

var contatosJuridico = [
    {id: 1, nome: "Transmunk", cnpj: "05140364352", telefone: "3244-5345", operadoras: operadoras[0]},
    {id: 2, nome: "Mateus", cnpj: "13216549798", telefone: "3259-7845", operadoras: operadoras[1]},
    {id: 3, nome: "Hermont", cnpj: "035624565484", telefone: "3256-8958", operadoras: operadoras[2]}
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

app.get('/contatosFisico', function (req, res) {
    res.write(JSON.stringify(contatosFisico));
    res.end();
});

app.post('/contatosFisico', function (req, res) {
    var contato = JSON.parse(req.body);
    var maxId = contatosFisico.map(function (contato) {
        return contato.id;
    });
    maxId = Math.max(...maxId);
    contato.id = ++maxId;
    contatosFisico.push(contato);
    res.end();
});

app.delete('/contatosFisico', function (req, res) {
    var idContatos = req.body;
    contatosFisico = contatosFisico.filter(function (contato) {
        return !idContatos.includes(contato.id);
    });
    res.end();
});

app.options('/contatosFisico', function (req, res) {
    res.end();
});


app.get('/contatosJuridico', function (req, res) {
    res.write(JSON.stringify(contatosJuridico));
    res.end();
});

app.post('/contatosJuridico', function (req, res) {
    var contato = JSON.parse(req.body);
    var maxId = contatosJuridico.map(function (contato) {
        return contato.id;
    });
    maxId = Math.max(...maxId);
    contato.id = ++maxId;
    contatosJuridico.push(contato);
    res.end();
});

app.delete('/contatosJuridico', function (req, res) {
    var idContatos = req.body;
    contatosJuridico = contatosJuridico.filter(function (contato) {
        return !idContatos.includes(contato.id);
    });
    res.end();
});

app.options('/contatosJuridico', function (req, res) {
    res.end();
});

