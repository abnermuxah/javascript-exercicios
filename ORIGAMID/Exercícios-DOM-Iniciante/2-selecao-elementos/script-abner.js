// Retorne no console todas as imagens do site
const img = document.querySelectorAll('img')
console.log(img)

// Retorne no console apenas as imagens que começaram com a palavra imagem
const imagem_nome = document.querySelectorAll('img[scr^="img/imagem"]');
console.log(imagem_nome);

// Selecione todos os links internos (onde o href começa com #)
const link_interno = document.querySelectorAll('a[href^="#"]');
console.log(link_interno)

// Selecione o primeiro h2 dentro de .animais-descricao

const animais = document.querySelector('.animais-descricao');
console.log(animais);
const animaisH2 = animais.querySelector('h2');
console.log(animaisH2);


// Selecione o último p do site

const all_p = document.querySelectorAll('p');
console.log(all_p[all_p.length-1]);

