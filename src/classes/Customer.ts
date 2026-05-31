interface CustomerOptions {
    name?: string;
    email?: string;
}
export class Customer {
    private _name! : string;
    private _email! : string;
    private _customer_id! : string;
    //? there are no many constructor in ts like java , but we can use the constructor params to initialize the properties or object pattern 
    
    constructor(customer : CustomerOptions = {}){
        //? here we are using the object pattern to initialize the properties of the class 
        this.name = customer.name ?? 'Customer';
        this.email = customer.email ?? 'customer@example.com';
        this.customer_id = '1234567890'; //^later on remove this and use api to get the customer id
    }
    get name(): string {
        return this._name;
    }
    set name(value: string) {
        if(value.length < 3 || value.length > 30){
            throw new Error("Name must be between 3 and 30 characters long");
        }
        this._name = value;
    }
    get email(): string {
        return this._email;
    }
    set email(value: string) {
        if(!value.includes("@")){
            throw new Error("Email must include an '@' symbol");
        }
        this._email = value;
    }
    get customer_id(): string {
        return this._customer_id;
    }
    set customer_id(value: string) {
        this._customer_id = value;
    }
    public formate(){
        return `Customer Name: ${this.name}, Email: ${this.email}, Customer ID: ${this.customer_id}`;
    }
}