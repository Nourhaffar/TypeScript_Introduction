export class Customer {
    //? there are no many constructor in ts like java , but we can use the constructor params to initialize the properties or object pattern 
    constructor(customer = {}) {
        var _a, _b;
        //? here we are using the object pattern to initialize the properties of the class 
        this.name = (_a = customer.name) !== null && _a !== void 0 ? _a : 'Customer';
        this.email = (_b = customer.email) !== null && _b !== void 0 ? _b : 'customer@example.com';
        this.customer_id = '1234567890'; //^later on remove this and use api to get the customer id
    }
    get name() {
        return this._name;
    }
    set name(value) {
        if (value.length < 3 || value.length > 30) {
            throw new Error("Name must be between 3 and 30 characters long");
        }
        this._name = value;
    }
    get email() {
        return this._email;
    }
    set email(value) {
        if (!value.includes("@")) {
            throw new Error("Email must include an '@' symbol");
        }
        this._email = value;
    }
    get customer_id() {
        return this._customer_id;
    }
    set customer_id(value) {
        this._customer_id = value;
    }
    formate() {
        return `Customer Name: ${this.name}, Email: ${this.email}, Customer ID: ${this.customer_id}`;
    }
}
