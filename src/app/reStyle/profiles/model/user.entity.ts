export class User {
    email: string
    password: string
    type: string
    firstName: string
    paternalSurname: string
    maternalSurname: string
    image: string

    constructor() {
        this.email = '';
        this.password = '';
        this.type = '';
        this.firstName = '';
        this.paternalSurname = '';
        this.maternalSurname = '';
        this.image = '';
    }
}
