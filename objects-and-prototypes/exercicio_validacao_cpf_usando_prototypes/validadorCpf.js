/* ESTÁ É A MINHA RESOLUÇÃO DO EXERCÍCIO */


function ValidaCpf(cpfEnviado) {
    Object.defineProperty(this, 'cpfLimpo', {
        enumerable: true,
        get: () => cpfEnviado.replace(/\D+/g, '') //retorno do get 
    })
};

ValidaCpf.prototype.isSequencia = function (){
    return sequencia = this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo;
};

ValidaCpf.prototype.valida = function () {
    if (typeof this.cpfLimpo === 'undefined') return false;
    if (this.cpfLimpo.length !== 11) return false;
    if (this.isSequencia()) return false;
    const cpfParcial = this.cpfLimpo.slice(0, -2);
    const digito1 = this.criaDigito(cpfParcial)
    const digito2 = this.criaDigito(cpfParcial+digito1)
    if (this.cpfLimpo.slice(-2) !== digito1+digito2) return false;
    return true;
};

ValidaCpf.prototype.criaDigito = function (cpfParcial) {
    const cpfArray = Array.from(cpfParcial);
    let contador = cpfArray.length + 1
    const total = cpfArray.reduce((p, c) => {
        var operacao = p + (Number(c) * contador)
        contador--;
        return operacao;
    }, 0);
    const digito = 11 - (total % 11)
    return digito > 9 ? '0' : String(digito);
};

// const cpf = new ValidaCpf('179.131.850-90')
const cpf = new ValidaCpf('222.222.222-22')
cpf.valida()?console.log("CPF válido"):console.log("CPF inválido");