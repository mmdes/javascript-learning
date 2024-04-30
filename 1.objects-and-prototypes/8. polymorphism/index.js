function Conta(agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
};

Conta.prototype.sacar = function (valor) {
    if (this.saldo < valor) {
        console.log(`Saldo insuficiente: R$ ${this.saldo}`);
        return;
    }
    this.saldo -= valor;
};

Conta.prototype.depositar = function (valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function () {
    console.log(`Ag/C: ${this.agencia} / ${this.conta} ` +
        ` | Saldo: R$ ${this.saldo.toFixed(2)}`)
};

function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}
CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;
/* EXEMPLO DE POLIMORFISMO */
CC.prototype.sacar = function (valor) {
    if (valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return
    };
    this.saldo-=valor
    this.verSaldo();
};



function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;



const c1 = new Conta(11, 22, 10);
// console.log(c1)
// c1.depositar(11)
// c1.sacar(22)

// const cc = new CC(11, 22, 0, 100);
// cc.depositar(10);
// cc.sacar(111)


const cp = new CP(11, 22, 0, 100);
cp.depositar(10);
cp.sacar(111);