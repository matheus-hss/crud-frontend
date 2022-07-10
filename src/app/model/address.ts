export class Address {
    zipCode: string;
    street: string;
    num: number;
    neighborhood: string;
    city: string;
    state: string;

    constructor() {
        this.zipCode = ''
        this.street = ''
        this.num = 0
        this.neighborhood = ''
        this.city = ''
        this.state = ''
    }
}