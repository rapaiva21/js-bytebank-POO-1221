class Cliente {
    nome;
    cpf;
}

class ContaCorrente {
    agencia;
    cliente;
    _saldo = 0;

    // SEM VER -- CRIAÇÃO DOS MÉTODOS sacar() depositar()
    // SEM VER -- CRIAÇÃO DE UM NOVO CLIENTE E UMA NOVA CONTA E MÉTODO transferir()

    sacar(valor){
        if(this._saldo >= valor){
        this._saldo -= valor;
        return valor;
        }
    }
    depositar(valor){
        if(valor <= 0){ 
            return;
        }
            this._saldo += valor;
    }
    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }
}

const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = 0001112223;

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo._saldo = 100;

const cliente2 = new Cliente()
cliente2.nome = "Alice";
cliente2.cpf = 0001112224;

const conta2 = new ContaCorrente()
conta2.agencia = 1002;
conta2.cliente = cliente2;
conta2._saldo = 500;

conta2.transferir(150, contaCorrenteRicardo)
console.log(conta2._saldo)
console.log(contaCorrenteRicardo)