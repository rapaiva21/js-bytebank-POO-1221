import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"
import { ContaPoupanca } from "./ContaPoupanca.js"
import { Conta } from "./Conta.js"

const cliente1 = new Cliente("Ricardo", 11122233309);
const contaCorrenteRicardo = new Conta(1001, cliente1);

const cliente2 = new Cliente("Alice", 88822233309);
const conta2 = new Conta(1002, cliente2);

const cliente3 = new Cliente("José", 44455566621);
const conta3 = new Conta(1003, cliente3);

const contaPoupanca = new Conta(50, cliente1, 1001);

contaCorrenteRicardo.depositar(500);
conta2.depositar(500);

console.log(Conta.numeroDeContas);
console.log(contaPoupanca);
