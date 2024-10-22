const form = document.querySelector('#form_contato');
let linhas = '';
const contato = [];

//evento para ao clicar no botão de cadastro inserir os dados na tabela. 
form.addEventListener('submit', function(e) {
    e.preventDefault(); //função para impedir o comportamento padrão do button 

    adicionarLinha(); // funções que estão sendo chamadas.
    atualizarTabela(); // funções que estão sendo chamadas.
    
});

function adicionarLinha() {
    const inputNome = document.querySelector('#nome');
    const inputDdd = document.querySelector('#container_number_ddd');
    const inputNumero = document.querySelector('#container_number_contato');
    const inputEmail = document.querySelector('#email');

    const nomeMaiusculo = inputNome.value.toUpperCase(); // Converter nome cadastrado pelo usuário para maiusculo

    if (contato.includes(inputEmail.value)) {
        alert(`O número: ${inputEmail.value} já foi inserido!`) // condição para e-mail já cadastrado
    } else {
        contato.push(inputEmail.value); // caso e-mail seja valido, as linhas com todas as informações serão adcionadas.

        let linha = '<tr>';
        linha += `<td>${nomeMaiusculo}</td>`;
        linha += `<td>${inputDdd.value} ${inputNumero.value}</td>`;
        linha += `<td>${inputEmail.value}</td>`;
        linha += '</tr>';
    
        linhas += linha;
    
        inputNome.value = '';
        inputDdd.value = '';
        inputNumero.value = '';
        inputEmail.value = '';
    }
}

function atualizarTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas
}