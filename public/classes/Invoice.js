export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `is this a Invoice for : ${this.client} owes ${this.amount}$ for ${this.details}`;
    }
}
