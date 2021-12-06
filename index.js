class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    cliente;
    _saldo = 0;

    // SEM VER -- CRIAÇÃO DOS MÉTODOS sacar() depositar() e transferir()

    sacar(valor){
        if(this._saldo < valor) return;
        this._saldo -= valor;
    }
    depositar(valor){
        if(valor > 0){
            return this._saldo += valor; 
        }
    }
}

const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = 0001112223;

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo._saldo = 100;
contaCorrenteRicardo.sacar(51);
contaCorrenteRicardo.depositar(151);


console.log(contaCorrenteRicardo)