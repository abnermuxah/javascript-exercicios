// Crie um objeto com os seus dados pessoais
// Deve possuir pelo menos duas propriedades nome e sobrenome
var dados_pessoais = {
  nome : "Abner",
  sobrenome : "Santana",
  idade : 24,
  sexo : "Masculino",
  endereco : "Natal - RN",
}

// Crie um método no objeto anterior, que mostre o seu nome completo

var dados = {
  nome : "Abner",
  sobrenome : "Santana",
  idade : 24,
  sexo : "Masculino",
  endereco : "Natal - RN", 
}

dados.nomeCompleto = function() {
  return `${this.nome} ${this.sobrenome}`;
}
// Modifique o valor da propriedade preco para 3000

var moto = {
  nome : "XRE 190",
  marca : "Honda",
  preco : 5000,
};

moto.preco = 3000;
// Crie um objeto de um cachorro que represente um labrador,
// preto com 10 anos, que late ao ver um homem

var cachorro = {
  raca : "Labrador",
  cor : "pretinho",
  idade : 10,
  latir (pessoa){
    if (pessoa === "homem"){
      return "Au Au";
    }
    else { return "nada" }
  }
}

