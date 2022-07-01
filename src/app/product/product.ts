export class Product {
     private _productName: string;
     private _productValue: number;
     private _description: string;

    constructor(){
        this._productName = '';
        this._productValue = 0.0;
        this._description = '';
    }

    public get productName(): string {
        return this._productName;
    }

    public set productName(productName: string) {
        this._productName = productName;
    }

    public get productValue(): number {
        return this._productValue;
    }

    public set productValue(productValue: number) {
        this._productValue = productValue;
    }

    public get description(): string {
        return this._description;
    }

    public set description(description: string) {
        this._description = description;
    }
}
