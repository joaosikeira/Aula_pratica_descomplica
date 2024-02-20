class Funcionario {
    constructor(nome,idade,cargo){
    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    }
    seApresentar(){
        console.log(`Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.cargo}.`);
    }
    trabalhar(){
        console.log(`${this.nome} está trabalhando.`);
    }
}

class Gerente extends Funcionario {
    constructor(nome,idade,cargo, departamento){
        super(nome, idade, cargo);
        this.departamento = departamento;
    }

    gerenciar(){
        console.log(`${this.nome} está gerenciando o departamento de ${this.departamento}.`);
    }
}

class Desenvolvedor extends Funcionario {
    constructor(nome,idade,cargo, linguagem){
        super(nome, idade, cargo);
        this.linguagem = linguagem;
    }
    programar(){
        console.log(`${this.nome} está programando em ${this.linguagem}.`);
    }

}

// Criando instâncias de um Gerente.
const ger = new Gerente ('Janoski', '40', 'Gerente', 'Suporte' );

//Listando os atributos instânciados. 
console.log(ger); 

// Chamando os métodos apropriados para o funcionário Gerente
ger.seApresentar();
ger.trabalhar();
ger.gerenciar();

console.log('------------------------------------------------------------') //Criado para estar separando os métodos


// Criando instâncias de um Desevolvedor.
const dev = new Desenvolvedor ('João', '27', 'Especialista em Apps', 'JavaScript');

//Listando os atributos instânciados.
console.log(dev);

// Chamando os métodos apropriados para o funcionário Desenvolvedor.
dev.seApresentar();
dev.trabalhar();
dev.programar();