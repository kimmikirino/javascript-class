var clientes = [
    {nome: "maria", idade: 12, resultado: "Menor de idade"},
    {nome: "ana", idade: 25, resultado: "Maior de idade"}
];

function listarClientes() {
    event.preventDefault();
    var informacao = document.getElementById('informacao');
    

    informacao.innerHTML = "";
    for(var i = 0; i< clientes.length; i++) {
        var element = document.createElement("li");
        element.className += " list-group-item";
        informacao.appendChild(criaElemento("p", clientes[i].nome, 'col-sm-4', element));
        criaElemento("p",clientes[i].idade + ' anos', 'col-sm-4', element);
        criaElemento("p", clientes[i].resultado, 'col-sm-4', element);    
    }

}

// function compare(a,b) {
//     return a.nome == b.nome ? 0 : +(a.nome > b.nome) || -1;
// }

function ordenarClientes(propriedade) {
    clientes.sort(function(a,b){
        return a[propriedade] == b[propriedade] ? 0 : +(a[propriedade] > b[propriedade]) || -1;
    });
    listarClientes();
}

function testar() {
    event.preventDefault();
    var nome = document.getElementById("nome");
    var idade = document.getElementById("idade");
    var informacao = document.getElementById('informacao');
    var resultado = '';

    var cli = new Object();

    cli.nome = nome.value;
    cli.idade = idade.value;

    nome.value = idade.value = '';
    
    if (cli.idade > 17) {
        resultado = 'Maior de idade';
    } else {
        resultado = 'Menor de idade';
    }

    cli.resultado = resultado;
    clientes.push(cli);
    var element = document.createElement("li");
    element.className += " list-group-item";

    informacao.appendChild(criaElemento("p", cli.nome, 'col-sm-4', element));
    criaElemento("p",cli.idade + ' anos', 'col-sm-4', element);
    criaElemento("p", resultado, 'col-sm-4', element);
}

function criaElemento (tag, texto, classe, append) {
    var criaElemento = document.createElement(tag);
    var elementoTexto = document.createTextNode(texto);
    criaElemento.className += classe;
    criaElemento.appendChild(elementoTexto);
    append.appendChild(criaElemento);
    return append;
}