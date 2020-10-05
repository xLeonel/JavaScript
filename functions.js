//map

var arrayMap = [2,4,6,8,10];

var mapFunction = arrayMap.map(function (valor) {
    return valor * 4;
});

console.log(mapFunction);

//ffilter

var pessoas = [
    {nome:'a', idade:5},
    {nome:'b', idade:18},
    {nome:'c', idade:25},
    {nome:'d', idade:15},
    {nome:'e', idade:54}
];

var Adults = pessoas.filter(function (valor) {
    return valor.idade >= 18;
});

console.log(Adults);

//Find

var Procurado = pessoas.find(function (valor) {
    return valor.nome === 'a';
});
 
console.log(Procurado);

//Every

var PartyInvite = pessoas.every(function (valor) {
    return pessoas.idade >= 18;
});

if (PartyInvite) {
    console.log(`Xama geral`);
}
else
{
    console.log(`Tem menor na parada`);
}

//some

var temMenor = pessoas.some(function (valor) {
    return pessoas.idade < 18;
});

if (!temMenor) {
    console.log(`Xama geral`);
}
else
{
    console.log(`Tem menor na parada`);
}

//reduce

//ex1
var zero = 0;
var somarArray = arrayMap.reduce(function (valor, zero) {
    return valor + zero;
}, 0);

console.log(somarArray);

//ex2 excluir item do array

var OnlyAge = pessoas.reduce(function (retorno, valor) {
    retorno.push(valor.idade);
    return retorno;
}, []);

console.log(OnlyAge);


