class ValidaFormulario {
    constructor() {
        this.formulario = document.querySelector(".formulario");
        this.eventos();

    }

    eventos() {
        this.formulario.addEventListener('submit', e => {
            this.handleSubmit(e);
        });
    }

    handleSubmit(e) {
        e.preventDefault(); // para que o formulario nao seja enviado
        const camposValidos = this.camposSaoValidos();
        const senhasValidas = this.senhasSaoValidas();
        if(camposValidos && senhasValidas){
            alert('Formulario enviado.')
            this.formulario.submit();
        }
    }

    camposSaoValidos() {
        let valid = true;

        for (let errorText of this.formulario.querySelectorAll('.error-text')) {
            errorText.remove();
        }

        for (let campo of this.formulario.querySelectorAll('.validar')) {
            if (!campo.value) {
                let label = campo.previousElementSibling.innerText;
                this.criaErro(campo, `Campo ${label} não pode estar em branco.`);
                valid = false
            }

            if (campo.classList.contains('cpf')) {
                if (!this.validaCpf(campo)) valid = false;
            }

            if (campo.classList.contains('usuario')) {
                if (!this.validaUsuario(campo)) valid = false;
            }
        }

        return valid;
    }

    criaErro(campo, msg) {
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend', div);
    }

    validaCpf(campo) {
        const cpf = new ValidaCpf(campo.value);
        if (!cpf.validar()) {
            this.criaErro(campo, 'CPF inválido.')
            return false;
        }
        return true;
    }

    validaUsuario(campo) {
        const usuario = campo.value;
        let valid = true;
        if (usuario.length < 3 || usuario.length > 12) {
            this.criaErro(campo, 'Usuário precisa ter entre 3 e 12 caracteres.');
            valid = false;
        }

        if (!usuario.match(/^[a-zA-Z0-9]+$/g)) {
            this.criaErro(campo, 'Nome de usuário precisa conter apenas letras e números.');
            valid = false;
        }

        return valid;
    }

    senhasSaoValidas() {
        let valid = true;

        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');

        if (senha.value !== repetirSenha.value) {
            valid = false;
            this.criaErro(senha, 'Campos senha e repetir senha precisam ser iguais.')
            this.criaErro(repetirSenha, 'Campos senha e repetir senha precisam ser iguais.')
        }

        if (senha.value.length < 6 || senha.value.length > 12) {
            valid = false;
            this.criaErro(senha, 'A senha precisa estar entre 6 e 12 caracteres.')
        }

        return valid;
    }
}


const valida = new ValidaFormulario();