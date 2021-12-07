import { Cliente } from "./Cliente.js"
import { ContaCorrente } from "./ContaCorrente.js"

/*const cliente1 = new Cliente()
cliente1.nome = "Ricardo";
cliente1.cpf = '0001112223';
*/
const cliente1 = new Cliente("Ricardo", 11122233309);

const contaCorrenteRicardo = new ContaCorrente()
contaCorrenteRicardo.agencia = 1001;
contaCorrenteRicardo.cliente = cliente1;
contaCorrenteRicardo._saldo = 100;

/*const cliente2 = new Cliente()
cliente2.nome = "Alice";
cliente2.cpf = '0001112224';
*/
const cliente2 = new Cliente("Alice", 88822233309);

const conta2 = new ContaCorrente()
conta2.agencia = 1002;
conta2.cliente = cliente2;
conta2._saldo = 500;

console.log(`Alice tem ${conta2._saldo}`);
console.log(`Ricardo tem ${contaCorrenteRicardo._saldo}`)
console.log('AGORA APÓS O SAQUE DE 100 DA ALICE E O DEPOSITO DE 200 DO RICARDO')
conta2.sacar(100);
contaCorrenteRicardo.depositar(200);
console.log('   ');
console.log(`Alice tem ${conta2._saldo}`);
console.log(`Ricardo tem ${contaCorrenteRicardo._saldo}`);
console.log('   ');
console.log('TRANSFERENCIA DE ALICE PARA RICARDO (250)');
conta2.transferir(250, contaCorrenteRicardo);
console.log(`Alice tem ${conta2._saldo}`);
console.log(`Ricardo tem ${contaCorrenteRicardo._saldo}`);
console.log('   ');
console.log('TESTE COM SET E GET');
console.log(conta2._cliente);
console.log('usando o get:');
console.log(conta2.cliente);