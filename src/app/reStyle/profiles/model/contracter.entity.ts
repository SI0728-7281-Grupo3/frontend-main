export class Contracter {
    id: number;
    userId: number;
    phone: string;
    description: string;
    image: string;

    constructor(userId: number, id: number, phone: string, description: string, image: string) {
        this.userId = userId;
        this.id = id;
        this.phone = phone;
        this.description = description;
        this.image = image;
    }
}
