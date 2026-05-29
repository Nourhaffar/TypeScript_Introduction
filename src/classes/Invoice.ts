export class Invoice {
    client: string;
    details: string;
    amount: number;

    constructor(client: string, details: string, amount: number) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }

    format() : string {
        return `is this a Invoice for : ${this.client} owes ${this.amount}$ for ${this.details}`;
    }
}
