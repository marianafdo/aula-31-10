const rl = require('readline-sync')
const recados = new Map();
recados.set('Joao', 'Olá, tudo bem?');
recados.set('Maria', 'Lembrar da reunião');
recados.set('Ana', 'Ir no mercado' );

function getRecado(nome){
    if (temRecado(nome) === true) {
        console.log(`Você tem um recado: ${recados.get(nome)}`);        
    } else if (nome == 'sair'){
        process.exit();
    } else {
        console.log('Não encontrei nenhum recado.');
    } 
}

function temRecado(nome){
    return recados.get(nome) !== undefined;
}

while(true){
    const pedirNome = rl.question('Pesquise um nome ou digite "sair": ');
    getRecado(pedirNome);   
}
