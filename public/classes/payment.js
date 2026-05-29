export class Payment {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `This is a Payment for : ${this.client} owes ${this.amount}$ for ${this.details}`;
    }
}
