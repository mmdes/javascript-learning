/*
    -   construir classe ControleRemoto com métodos aumentar e diminuir volume 
    -   construir um metodo estático dentro dessa classe e chamá-lo depois
    -   atributos: tv, volume
*/


class ControleRemoto{

    constructor(tv){
        
        this.tv = tv;
        this.volume = 0;

    }

    aumentar(){
        this.volume+=2;
        console.log('O volume atual é: ' + this.volume)
    }

    diminuir(){
        this.volume-=2;
        console.log('O volume atual é: ' + this.volume)
    }

    // metodo estatico
    static trocaPilha(){
        console.log('Todas as pilhas foram trocadas')
    }
}


/* parte principal do programa */

cr1 = new ControleRemoto('sony')

cr1.aumentar()
cr1.aumentar()
cr1.diminuir()

/* não precisei instanciar nenhum objeto para usar os métodos estáticos */

ControleRemoto.trocaPilha()