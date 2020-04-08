// Crie uma array com os anos que o Brasil ganhou a copa
// 1959, 1962, 1970, 1994, 2002
var brasilCampeao = [1959, 1962, 1970, 1994, 2002];

// Interaja com a array utilizando um loop, para mostrar
// no console a seguinte mensagem, `O brasil ganhou a copa de ${ano}`

for (var i=0 ; i < brasilCampeao.length ; i++){
  // console.log(`brasil ganhou a copa de  ${brasilCampeao[i]}` );
};

// Interaja com um loop nas frutas abaixo e pare ao chegar em Pera

var frutas = ['abacate', 'maca', 'banana', 'pera', 'pitomba']

for (var i = 0 ; i < frutas.length ; i++){
  console.log(frutas[i])
  if (frutas[i] ==='pera'){
    break;
  }
}

// Coloque a última fruta da array acima em uma variável,
// sem remover a mesma da array.

var ultimaFruta = frutas[frutas.length-1];
console.log(ultimaFruta)
