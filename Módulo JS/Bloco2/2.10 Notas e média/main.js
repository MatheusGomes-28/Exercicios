const notas = [8.5, 4.0, 7.0, 5.5, 9.5, 6.0, 3.0, 7.5];

let aprovado = [];
let reprovado = [];

for(i = 0; i <= notas.length; i++){

    if (notas[i]>= 7){
        aprovado.push(notas[i]);
    }
    else{
        reprovado.push(notas[i]);
    }
}

console.log(`Notas Aprovadas: ${aprovado}`);
console.log(`Notas Reprovadas: ${reprovado}`);