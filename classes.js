class Pessoa {
    constructor(primeiroNome, segundoNome, peso, altura, idade) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
    }

    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }

    calculaIMC() {
        let alturaQuadrado = Math.pow(this.altura, 2);
        return this.peso / alturaQuadrado;
    }
}

class Medico extends Pessoa {
    constructor(primeiroNome, segundoNome, peso, altura, idade, crm) {
        super(primeiroNome, segundoNome, peso, altura, idade);
        this._crm = crm;
    }

    get crm() {
        return this._crm;
    }

    set crm(novoCrm) {
        this._crm = novoCrm;
    }
}

//criar uma classe casa
//attr quantidadeDeComodos, valor, alugada, vendedor
// criar uma classe apartamento que herde de casa
// a classe apartamento deve ter os atributos bloco e andar

class casa {
    constructor(quantidadeDeComodos, valor, vendedor) {
        this.quantidadeDeComodos = quantidadeDeComodos;
        this.valor = valor;
        this.alugada = false;
        this.vendedor = vendedor;
    }

    get alugada() {
        return this.alugada;
    }

    set alugada(estaAlugada) {
        this.alugada = estaAlugada;
    }
}

class apartamento extends casa {
    constructor(quantidadeDeComodos, valor, vendedor, bloco, andar) {
        super(quantidadeDeComodos, valor, vendedor);
        this.bloco = bloco;
        this.andar = andar;
    }
}