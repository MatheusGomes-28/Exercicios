function saudacao(nome){
    
    console.log(`Hello World! My name is ${nome}!`)

};

saudacao("Matheus");



/*função postiva ou negativa */


function testeSinal (numero){
    if(numero > 0){
        console.log(`O número ${numero} é positivo!`);
    }
    else{
        console.log(`O número ${numero} é negativo!`);
    }
}
testeSinal(1);

/*Calcular Área */


function area (largura, altura){

    let areaTotal = largura * altura;
    console.log(`A área total é ${areaTotal}.`);
}

area(4,8);

