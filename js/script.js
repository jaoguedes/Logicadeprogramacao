
function contarDez() {

    for (let i = 1; i <= 10; i++) {
        console.log(i)
    }

}
function contarPares() {
    let num = prompt("digite seu numero");
    num = parseInt(num)
    for (let i = 0; i <= num; i++) {
        if (i % 2 == 0) {
            console.log(i)
        }
    }
}
function contarPrimos() {
    let num = prompt("digite seu numero primo");
    num = parseInt(num)
    for (let i = 2; i < num; i++) {
        if ((num % 2 != 0) || (num == 2)) {
            console.log(num, "é primo")
        } else {
            console.log(num, "não é primo")
        }

    }
}
function contarTabuada() {
    let num = prompt("digite um numero");
    num = parseInt(num);
    for (let i = 0; i <= 10; i++) {
        console.log(num * i)
    }
}
function contarImp() {
    let num = prompt("digite um numero");
    num = parseInt(num);
    let i = 0;
    while (i <= num) {
        i++
        if (i % 2 != 0) {
            console.log(i)
        }
    }
}
function somarPares() {
    let num = prompt("digite um numero");
    num = parseInt(num);
    let i = 0;
    let soma = 0;
    while (i <= num) {
        i++
        if (i % 2 == 0) {
            soma = soma + i;
        }

    }
    console.log(soma)
}

function palindromo() {
    let pal = prompt("escreva uma palavra e vamos ver se é palindormo");
    let inv = '';
    for (let i = 1; i <= pal.length; i++) {
        inv = inv + pal.charAt(pal.length - i)
    }
    if (pal == inv) {
        console.log("sua palavra é palindromo!!! olhe", inv)
    } else {
        console.log("não é palindromo!!! olhe", inv)
    }
}

function contarImpares() {
    let num = 10;
    while (num >= 1) {
        console.log(num--)
    }

}
function somaUm() {
    alert('vamos olhar a soma de 1 a 100')
    num = 100;
    soma = 0;
    for (let i = 0; i <= num; i++) {
        soma = soma + i;
    }
    console.log(soma)
}
function media() {
    alert('vamos fazer a sua media, digite os numeros, quando desejar a media escreva 0')
    let valorAtual = -1;
    let somaNum = 0;
    let divs = 0;
    while (valorAtual != 0) {
        valorAtual = prompt('digite seu numero:');
        if (valorAtual != 0) {
            valorAtual = parseFloat(valorAtual)
            somaNum = somaNum + valorAtual;
            divs++
        }
    }
    console.log(somaNum / divs)
}

function multiploTre() {
    alert('todos os multiplos de 3 ate 100')
    for (let i = 0; i <= 100; i++) {
        if (i % 3 == 0) {
            console.log(i)
        }
    }
}
function primeiroSeg() {
    let num = prompt("Insira um número")
    let soma = 0
    for (let i = 0; i < num.length; i++) {
        soma = soma + parseInt(num[i])
    }
    console.log(soma)
}
function doisPrimos() {
    let n1 = prompt('primeiro numero:');
    let n2 = prompt('segundo numero:');
    n1 = parseFloat(n1);
    n2 = parseFloat(n2);

    for (let i = n1; i <= n2; i++) {
        if ((i % 2 != 0) || (i == 2)) {
            console.log(i, "é primo")
        }


    }
}
function area() {
    let l1 = prompt('digite a altura')
    let l2 = prompt('digite a base')
    l1 = parseFloat(l1)
    l2 = parseFloat(l2)

    console.log(l1 * l2)
}
function vogaisCon() {
    let pal = prompt("escreva uma palavra ");
    let inv = '';
    pal = pal.toUpperCase();

    for (let i = 0; i < pal.length; i++) {

        inv = inv + pal.charAt(pal.length - i)
        if (pal[i] == "A" || pal[i] == "E" || pal[i] == "I" || pal[i] == "O" || pal[i] == "U") {
            console.log(pal[i], 'é vogal')
        } else {
            console.log(pal[i], 'é cosoante')
        }
    }

}
function areaCirc() {
    const pi = 3.14;
    let pi2 = pi * 2;
    let raio = prompt("digite o raio do seu circulo");
    console.log(pi2 * raio)
}
function areaTrig() {
    let l1 = prompt('digite a altura')
    let l2 = prompt('digite a base')
    l1 = parseFloat(l1)
    l2 = parseFloat(l2)

    console.log(l1 * l2 / 2)
}
function areaTrap() {
    let l1 = prompt('digite a base maior');
    let l2 = prompt('digite a base menor');
    let l3 = prompt('digite a altura');
    l1 = parseFloat(l1)
    l2 = parseFloat(l2)
    l3 = parseFloat(l3)

    console.log(l1 + l2 * l3 / 2)
}
function subAs() {
    let ast = prompt('que letra vc deseja subistuir?')
    let pal = prompt("escreva uma palavra ");

    for (let i = 0; i < pal.length; i++) {

        if (pal[i] == ast) {
            pal = pal.replace(pal[i], '*');

        }

    } console.log(pal)


}
function inver() {
    // Função para inverter uma frase
    function inverterFrase(frase) {
        let pal = frase.split(" "); 
        let frInv = "";

        // Inverte cada palavra individualmente
        for (let i = pal.length - 1; i >= 0; i--) {
            frInv += pal[i] + " ";
        }

        return frInv.trim(); 
    }
    // Função principal
    function mostrarInv() {
        let frOri = prompt("Digite uma frase:"); 
        let frInv = inverterFrase(frOri); 

        console.log("Frase invertida:", frInv);
    }

    // Chama a função principal
    mostrarInv();
}
function remBra() {
    alert('escreva uma frase e iremos tirar os espaços em branco')
    let pal = prompt("escreva uma palavra:");
    console.log(pal.replace(/ /g, ''))
}
function ateCem() {


    let soma = 0;
    while (soma <= 100) {
        let pal = prompt("escreva um numero");
        pal = parseFloat(pal)
        soma = soma + pal;

    } console.log(soma)
}
function contPal() {
    alert('escreva uma palavra a seguir e dps uma frase e iremos contar quantas vezes essa palavra aparece na sua frase');
    let ler = prompt('qual palavra voce quer contar?');
    let pal = prompt('escreva uma frase agora');

    let nrVezes = pal.match(new RegExp(ler, 'gi'));
    console.log(nrVezes.length)

}
function upPrimeira() {
    let pal = prompt('escreva uma frase')
    let car = pal.toLowerCase().split(' ');

    for (let i = 0; i < car.length; i++) {
        car[i] = car[i].charAt(0).toUpperCase() + car[i].slice(1);
    }
    let carTitleCase = car.join(' ');
    console.log(carTitleCase)
}
function ordCrec() {
    let v1 = prompt("Digite o primeiro valor:");
    let v2 = prompt("Digite o segundo valor:");
    let v3 = prompt("Digite o terceiro valor:");
    v1 = parseFloat(v1);
    v2 = parseFloat(v2);
    v3 = parseFloat(v3);
    let orderCre = [v1, v2, v3]
    orderCre = orderCre.sort(ordenar)
    console.table(orderCre)
}
function ordenar(a, b) {
    return a - b;
}