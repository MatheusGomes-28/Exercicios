// Exemplo de conversão
function somar(a, b) { return a + b; }
// Vira:
//const somar = (a, b) => a + b;

// Primeira função


const saudacao = (nome) =>{
    console.log(`Hello World! ${nome}`);
};

saudacao("Matheus");

//Segunda Função

const testeSinal = (numero) =>{

    if(numero > 0){
        console.log("É positivo.");
    }
    else{
        console.log("É negativo.")
    }
};

testeSinal(-3);

//Terceira função

const area = (h, b) => {
    let areaTotal = h * b;
    console.log(`A área total é de ${areaTotal}m².`);
};

area(5,10);