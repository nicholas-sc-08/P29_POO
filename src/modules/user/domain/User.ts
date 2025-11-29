export class User {

    public id: string;
    public name: string;
    public email: string;
    public cpf: string;
    public password: string;

    constructor(id: string, name: string, email: string, cpf: string, password: string){

        this.id = id;
        this.name = name;
        this.email = email;
        this.cpf = cpf;
        this.password = password;
    };

    public getFirstName(): string | undefined {

        return this.name.split(" ")[0];
    };
};