class ValidaCpf {
    constructor(cpfEnviado) {
        this.cpfLimpo = this.#limparCpf(cpfEnviado);
    }

    #limparCpf(cpf) {
        return cpf.replace(/\D+/g, '');
    }

    #criarDigito(cpfParcial) {
        const cpfArray = Array.from(cpfParcial);
        let contador = cpfArray.length + 1;
        const total = cpfArray.reduce((p, c) => {
            var operacao = p + (Number(c) * contador)
            contador--;
            return operacao;
        }, 0);
        const digito = 11 - (total % 11)
        return digito > 9 ? '0' : String(digito);
    }

    validar() {
        if (this.cpfLimpo.length !== 11) return false;
        if (typeof this.cpfLimpo === 'undefined') return false;
        if (this.cpfLimpo[0].repeat(this.cpfLimpo.length) === this.cpfLimpo) return;
        const cpfParcial = this.cpfLimpo.slice(0, -2);
        const digito1 = this.#criarDigito(cpfParcial);
        const digito2 = this.#criarDigito(cpfParcial + digito1);
        if (this.cpfLimpo.slice(-2) !== digito1 + digito2) return false;
        return true;
    }
}
