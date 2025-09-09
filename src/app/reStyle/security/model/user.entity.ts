export class User {
    email: string
    password: string
    type: string
    fullname: string


    constructor(email: string, password: string, type: string, fullname: string) {
        this.email = email;
        this.password = password;
        this.type = type;
        this.fullname = fullname;
    }
}
