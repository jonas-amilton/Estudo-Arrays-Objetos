let array = [{ desc: "teste1" }, { desc: "teste2" }, { desc: "teste3" }];
let teste = document.getElementById("teste");

//listando objetos na tela
array.forEach((item) => (teste.innerHTML += `Item: ${item.desc}<br>`));

//-----------------------------------------------------------

//deletando propriedades de um objeto
let pessoa = {
  nome: "Fernando",
  idade: 40,
  profissao: "Banqueiro",
};

console.log(pessoa);
/** resultado:
 * {nome: 'Fernando', idade: 40, profissao: 'Banqueiro'}
 */

delete pessoa.nome;

console.log(pessoa);
/** resultado:
 * {idade: 40, profissao: 'Banqueiro'}
 */

//-----------------------------------------------------------

//copiando propriedades de um objeto
let objA = {
  prop1: "teste",
  prop2: "teste2",
};

console.log(objA);
/** resultado antes da herança:
 * {prop1: 'teste', prop2: 'teste2'}
 */

let objB = {
  prop3: "teste3",
};

//objA herda objetos de objB
Object.assign(objA, objB);

console.log(objA);
/** resultado após herança:
 * {prop1: 'teste', prop2: 'teste2', prop3: 'teste3'}
 */

//-------------------------------------------------------------

//transformando objeto em array e listando

let objC = {
  prop4: "teste4",
  prop5: "teste5",
};

let objTransformadoEmArray = Object.keys(objC);

console.log(objTransformadoEmArray);
/** resultado após transformação:
 *  ['prop4', 'prop5']
 */