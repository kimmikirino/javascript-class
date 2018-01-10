var products = [
    {
        image: 'images/1.jpg',
        name: 'Pulma Golf',
        color: '#2f52b7',
        size: 'XXL',
        price: '$72',
        qty: 3,
        total: '$216' 
    },
    {
        image: 'images/2.jpg',
        name: 'Nike Mens running',
        color: '#007698',
        size: '43',
        price: '$129',
        qty: 1,
        total: '$129' 
    },
    {
        image: 'images/3.jpg',
        name: 'DC Mens Axis',
        color: '#1c376a',
        size: 'S',
        price: '$89',
        qty: 2,
        total: '$178' 
    }
];

function criarElemento (tag, texto, classe, append) {
    var criaElemento = document.createElement(tag);
    var elementoTexto = document.createTextNode(texto);
    criaElemento.className += classe;
    criaElemento.appendChild(elementoTexto);
    append.appendChild(criaElemento);
    return append;
}

var tbodyProduct = document.getElementById('products');
var bodyProduct = ''; 
for(var i=0; i < products.length; i++) {
    var img = new Image();
    //var element = document.createElement("tr");
    //tbodyProduct.appendChild(criarElemento('td', 'x', '', element));
    // img.src = products[i].image;
    // img.className = 'img-red';
    // criarElemento('td', products[i].name, '', element);
    // tbodyProduct.innerHTML += '<td><img src="' + products[i].image + '" class="img-red" />';
    // tbodyProduct.innerHTML += products[i].name + '</td>';
    //tdImage.appendChild(img);
    // criarElemento('td', products[i].name, '', element);
    // criarElemento('td', products[i].price, '', element);
    // criarElemento('td', products[i].qty, '', element);
    // criarElemento('td', products[i].total, '', element);

    bodyProduct += '<tr><td class="align-middle">x</td>' ;
    bodyProduct += '<td class="align-middle"><div class="box"><img src="'+ products[i].image + '" class="img-red" />' ;
    bodyProduct += '<div class="name-box">' + products[i].name;
    bodyProduct += '<div class="name-box__ball"> cor: <div class="ball" style="background-color:' + products[i].color + '"></div>';
    bodyProduct += ' Tamanho: <span class="name-box__size">' + products[i].size + '</span></div></div></td>';
    bodyProduct += '<td class="align-middle">'+ products[i].price +'</td>' ;
    bodyProduct += '<td class="align-middle">'+ products[i].qty +'</td>' ;
    bodyProduct += '<td class="align-middle">'+ products[i].total +'</td>' ;
    bodyProduct += '</tr>';
}

tbodyProduct.innerHTML =bodyProduct;