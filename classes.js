class Pessoa {
    constructor(primeiroNome, segundoNome, peso, altura, idade) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.peso = peso;
        this.altura = altura;
        this.idade = idade;
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
}