var products = [
    {
        id: 1,
        image: {
            src: 'images/1.jpg',
            alt: 'Camisa 1',
            title: 'Camisa bonita'
        },
        name: 'Pulma Golf',
        color: '#2f52b7',
        size: 'XXL',
        price: '72',
        qty: 3
    },
    {
        id: 2,
        image: {
            src: 'images/2.jpg',
            alt: 'Camisa 2',
            title: 'Camisa azur'
        },
        name: 'Nike Mens running',
        color: '#007698',
        size: '43',
        price: '129',
        qty: 1
    },
    {
        id: 4,
        image: {
            src: 'images/3.jpg',
            alt: 'Camisa 3',
            title: 'Camisa tb azur'
        },
        name: 'DC Mens Axis',
        color: '#f9c0f9',
        size: 'S',
        price: '10',
        qty: 10
    },
    {
        id: 3,
        image: {
            src: 'images/4.png',
            alt: 'Camisa 4',
            title: 'Camisa rosa'
        },
        name: 'DC Mens Axis',
        color: '#1c376a',
        size: 'S',
        price: '89',
        qty: 2
    },

];

var userData = {};

function criarElemento(tag, texto, classe, append) {
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
    document.getElementById('shoppingQtyTotal').innerHTML = `You have <b>${products.length} items</b> in your order`;
    let subtotal = 0;
    for (var i = 0; i < products.length; i++) {
        var img = new Image();
        let total = 0;

        total = Number(products[i].price) * Number(products[i].qty);
        bodyProduct += '<tr><td class="align-middle"><span class="delete-item" onclick="remove(' + products[i].id + ')">x</span></td>';
        bodyProduct += '<td class="align-middle"><div class="box"><img src="' + products[i].image.src + '" class="img-red" alt="' + products[i].image.alt + '"/>';
        bodyProduct += '<div class="name-box"><b>' + products[i].name;
        bodyProduct += '</b><div class="name-box__ball"> Color: <div class="ball" style="background-color:' + products[i].color + '"></div>';
        bodyProduct += ' Size: <span class="name-box__size">' + products[i].size + '</span></div></div></td>';
        bodyProduct += '<td class="align-middle">$<b>' + products[i].price + '</b></td>';
        bodyProduct += '<td class="align-middle"><div class="qty"><div class="qty__left" onclick="dec(' + products[i].id + ')">-</div><div class="qty__middle">' + products[i].qty + '</div><div class="qty__right" onclick="inc(' + products[i].id + ')">+</div></div></td>';
        bodyProduct += '<td class="align-middle">$<b>' + total + '</b></td>';
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
    return products.filter(function (product) {
        if (product.id === id) {
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
    if (productFiltered.qty) {
        productFiltered.qty--;
    }
    list();
}

function remove(id) {
    products = products.filter(function (product) {
        return product.id !== id;
    });
    list();
}

function changeTab(event, tabName, linkTab) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("tab-pane");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("nav-link");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    document.getElementById(linkTab).className += " active";
}

function saveData() {
    var shippingElements = document.getElementById('shipping-form').elements;
    var isBlank;

    for (var i = 0; i < shippingElements.length; i++) {
        if (shippingElements[i].name === 'shippingMethod' && shippingElements[i].checked) {
            userData['shippingMethod'] = shippingElements[i].value;
            break;
        }

        userData[shippingElements[i].name] = shippingElements[i].value;

        if (!isBlank) {    
            if (shippingElements[i].name === 'city' || shippingElements[i].name === 'country') {
                isBlank =  userData[shippingElements[i].name] === '0';
            } else {
                isBlank =  userData[shippingElements[i].name].trim().length === 0;
            }
        } 
    }

    console.log(userData);
    if (isBlank) {
        alert('É necessário preencher todos os campos.');
    } else {
        changeTab(event, 'payment', 'paymentLink');

    }
}
