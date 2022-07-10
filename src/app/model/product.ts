import { Lab } from 'src/app/model/lab';

export class Product {
    id: string
    productName: string
    productValue: number
    description: string
    lab: Lab

    constructor(){
        this.id = ''
        this.productName = ''
        this.productValue = 0.0
        this.description = ''
        this.lab = new Lab()
    }
}
