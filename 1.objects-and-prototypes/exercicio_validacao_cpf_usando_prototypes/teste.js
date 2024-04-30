function example() {
    var x = 10;
    if (true) {
        var x = 20; // Define uma nova variável x dentro do bloco if
        console.log(x); // 20
    }
    console.log(x); // 10, pois a variável x do bloco if é diferente da variável x exterior
}

example()