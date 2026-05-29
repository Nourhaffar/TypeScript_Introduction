export class Payment {
    client: string;
    details: string;
    amount: number;

    constructor(client: string, details: string, amount: number) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }

    format() : string {
        return `This is a Payment for : ${this.client} owes ${this.amount}$ for ${this.details}`;
    }
}
