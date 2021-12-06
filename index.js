class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    cliente;
    _saldo = 0;
}

const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = 0001112223;

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo._saldo = 100;

console.log(contaCorrenteRicardo)