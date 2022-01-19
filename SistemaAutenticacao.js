/*
Ser autenticavel significa ter om étodo autenticar
*/

export class SistemaAutenticacao{
    static login(autenticavel, senha){
        return autenticavel.autenticar(senha);
    }
}