var products = [
    {
        id: 1,
        image: 'images/1.jpg',
        name: 'Pulma Golf',
        color: '#2f52b7',
        size: 'XXL',
        price: '72',
        qty: 3
    },
    {
        id: 2,
        image: 'images/2.jpg',
        name: 'Nike Mens running',
        color: '#007698',
        size: '43',
        price: '129',
        qty: 1
    },
    {
        id: 3,
        image: 'images/3.jpg',
        name: 'DC Mens Axis',
        color: '#1c376a',
        size: 'S',
        price: '89',
        qty: 2
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

function list() {
    //tbodyProduct.innerHTML = "";
    bodyProduct = "";   
    let subtotal = 0;
    for(var i=0; i < products.length; i++) {
        var img = new Image();
        let total = 0;
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
        total = Number(products[i].price) * Number(products[i].qty);
        bodyProduct += '<tr><td class="align-middle"><span class="delete-item">x</span></td>' ;
        bodyProduct += '<td class="align-middle"><div class="box"><img src="'+ products[i].image + '" class="img-red" />' ;
        bodyProduct += '<div class="name-box"><b>' + products[i].name;
        bodyProduct += '</b><div class="name-box__ball"> cor: <div class="ball" style="background-color:' + products[i].color + '"></div>';
        bodyProduct += ' Tamanho: <span class="name-box__size">' + products[i].size + '</span></div></div></td>';
        bodyProduct += '<td class="align-middle">$<b>'+ products[i].price +'</b></td>' ;
        bodyProduct += '<td class="align-middle"><div class="qty"><div class="qty__left" onclick="dec('+products[i].id+')">-</div><div class="qty__middle">'+ products[i].qty +'</div><div class="qty__right" onclick="inc('+products[i].id+')">+</div></div></td>' ;
        bodyProduct += '<td class="align-middle">$<b>'+ total +'</b></td>' ;
        bodyProduct += '</tr>';
        subtotal += Number(total);
    }
    
    bodyProduct += '<tr><td colspan="5" class="text-right">Subtotal: <h4 class="text-inline">$<b>' + subtotal + '</b></h4></td></tr>';
    tbodyProduct.innerHTML = bodyProduct;
    // console.log(`texto string linha 1
    //     texto string linha 2 ${products[1].name}`
    // );
}

function productFilter(id) {
    return products.filter(function(product){
        if(product.id === id){
            return product;
        } 
    })[0];
};

function inc(id) {
    var productFiltered = productFilter(id);
    productFiltered.qty++;
    list();
}

function dec(id) {
    var productFiltered = productFilter(id);
    if(productFiltered.qty) {
        productFiltered.qty--;
    }
    list();
}

list();