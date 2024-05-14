const form = document.getElementById('form');
const nome = document.getElementById('name');
const tel = document.getElementById('phone');
const corpoTabela = document.querySelector('tbody');
const contatos = [];
const numeros = [];
let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();
    addContato();
})

function addContato() {
    if(contatos.includes(nome.value) || numeros.includes(tel.value)) {
        alert(`O contato ${nome.value} ou número ${tel.value} já existem!`);
    } else {
        contatos.push(nome.value);
        numeros.push(tel.value);
        addLinha();
    }
    nome.value = '';
    tel.value = '';
}

function addLinha() {
    let linha = '<tr>';
    linha += `<td>${nome.value}</td>`;
    linha += `<td>${tel.value}</td>`;
    linha += '</tr>';
    linhas += linha;
    corpoTabela.innerHTML = linhas;
}