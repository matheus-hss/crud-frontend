import { Address } from './address'

export class Lab {
    id: string
    labName: string
    email: string
    tel: string
    address: Address

    constructor() {
        this.id = ''
        this.labName = ''
        this.email = ''
        this.tel = ''
        this.address = new Address()
    }
}