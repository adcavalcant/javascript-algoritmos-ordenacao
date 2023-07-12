//ALGORITMO QUE PEGA O LIVRO MAIS BARATO DENTRO DO ARRAY.

//                   0   1   2   3   4   5
const precosLivro = [25, 15, 30, 50, 45, 20];

let maisBarato = 0;

for (let atual = 0; atual <= precosLivro.length; atual++) {
  if (precosLivro[atual] < precosLivro[maisBarato]) {
    maisBarato = atual
  }
}

console.log(`O livro mais barato custa ${precosLivro[maisBarato]}`);
