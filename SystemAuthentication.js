/*
Being authenticable means have the method verify

Duck Typing
*/

export class SystemAuthentication{
    static login(authenticable, password){
        if(SystemAuthentication.isAuthenticable(authenticable)){
            return authenticable.verify(password);
        }
        return false;
    }
    static isAuthenticable(authenticable){
        return "verify" in authenticable && 
        authenticable.verify instanceof Function
    }
}