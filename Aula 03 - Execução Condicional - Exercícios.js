/*1 Testar se o quadrado de um número é maior do que ele multiplicado por 10;*/
/**/

var a = 11
var dez = a * 10

if (a * a >= dez){
    console.log("A é maior que dez")
}else{
    console.log("A é menor que dez")
}

/* 2 Testar se um número é divisível por 3 e por 4 (tente fazer usando apenas if’s);*/

var a1 = 8
var b1 = a1 % 3
var c1 = a1 % 4
var d1 = b1, c1

if (d1 == 0){
    console.log("É divisiel por 3 e 4")
    }else{
        console.log("Não é divisiel por 3 e 4")
}

/* 3 Testar se um número é divisível por 3 mas não por 4 (tente fazer usando apenas if’s);*/

var a3 = 6
var b3 = a3 % 3
var c3 = a3 % 4
/*var d1 = b1, c1*/

if (b3 == 0){
    console.log("É divisiel por 3")
    }else if(b3 == 0){
        console.log("Este número não é divisivel por 3")
    }if(c3 == 0){
        console.log("É divisiel por 4")
    }else if(b3 == 0){
        console.log("Este número não é divisivel por 4")
        console.log("Não é divisiel por 3 e 4")
    }else{
}

/* 4 Testar se um número é divisível por 2 ou por 7 (tente fazer usando apenas if’s);*/

var a4 = 35
var b4 = 2
var c4 = 7

if (a4 % b4 == 0){
    console.log("É divisiel por 2")
    }else if(a4 % c4 == 0){
        console.log("É divisiel por 7")
        }else{
        console.log("Não é divisiel por 2 ou 7")
        }

/* 5 Multiplicar dois números e verificar se o resultado é um número negativo; */

var a5 = 3
var b5 = -7
var c5 = a5 * b5

if (c5 > 0){
    console.log(c5,"É um número positivo")
}else{
    console.log(c5,"É um número negativo")
}

/* 6 Dividir dois números inteiros e verificar se o resultado é divisível por 10;*/

var a6 = 1
var b6 = 20
var c6 = a6 % 10
var d6 = a6 % 10

if(c6 == 0){
    console.log("É divisivel por 10")
    }else if(c6 == 0){
        console.log("Este número não é divisivel por 10")
    }if(d6 == 0){
        console.log("É divisivel por 10")
    }else if(c6 == 0){
        console.log("Este número não é divisivel por 10")
    }else{
        console.log("Não é divisivel por 10")
    }

/* 7 Dividir a por b e verificar se o resultado é maior do que a; */

var a7 = 15
var b7 = 1
var c7 = a7 / b7
console.log(c7)

if (a7 > c7){
    console.log("A ainda é maior que o resultado")
}else{
    console.log("O resultado é maior do que A")
}

/* 8 Dado dois números, imprimir em ordem crescente;*/

var a8 = 22
var b8 = 7

var numeros = [5, 6, 9 ,132]
numeros.sort((a8, b8) => {
    
    if(a8 > b8) return 1;
    if(a8 < b8) return -1;
    return 0;    
})
console.log(numeros)  
    
/* 9 Dado dois números,  imprimir em ordem decrescente;*/


var a9 = 2
var b9 = 8

var numeros1 = [0, 55, 6 ,245]
numeros1.sort((x, y) => {
    
    if(a9 > b9) return 1;
    if(a9 < b9) return -1;
    return 0;    
})
console.log(numeros1)  
  
/* 10 Elevar um número ao quadrado e informar se o resultado é maior do que 100 */
var a10 = 11
var b10 = a10*a10

if(b10 > 100){
    console.log("O quadrado de", a10 +" é maior do que 100")
}else{
    console.log("O quadrado de", a10 +" não é maior do que 100")
}



