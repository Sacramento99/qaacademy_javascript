function somar(){
    const a = 10;
    const b = 20;
    const resultado = a+b;
    console.log(resultado);
    
}
// somar()

function subtracao(){
    const a = 20;
    const b = 30;

    const resutado = a-b;
    console.log(resutado);


}

function somaComParametro(a,b){
    const soma = a-b
    console.log(soma)
    console.log('a:'+20,'b:'+30);

}


function subtracaoComParamentro(x,y){
    const sub = x-y;
    console.log("Valor da subtração:" +sub);
}
    

// subtracaoComParamentro(20,30)


function somaComRetorno(a,b,i){
    const somatoria = a+b+i;
    return somatoria;
    console.log(somaComRetorno(10,20,30))
}

// function subtracaoComRetorno (l,r,s){
//     const subtracao = l-r-s;
//     return subtracao;
// }
// console.log(subtracaoComRetorno(10,40,60))

function mult(a,b){
const mult = a*b;
return mult;

}
// console.log(mult(52,10))

function imprimirFrase(frase){
    return frase;

}
// console.log(imprimirFrase("O amor e lindo"));

function palavrasemretorno(){
    const palavra ="mousepad"
    console.log(palavra)

}
// palavrasemretorno();

function trocarValores(valor1,valor2){
    
    const trocar = valor2;
    valor2 = valor1;
    valor1 = trocar;;
    console.log("valor1:" +valor1+ "valor2:" + valor2);


}
// trocarValores(30,20);

function dividiporDois(param){
    return param;

}
const valor = dividiporDois(15);
if(valor/2 == 0){
    console.log("igual a zero")
    return true;

}else{
    
    console.log("retorno invalido")
    return false;

}



