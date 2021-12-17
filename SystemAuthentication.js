export class SystemAuthentication{
    static login(employee, password){
        return employee.password == password;
    }
}