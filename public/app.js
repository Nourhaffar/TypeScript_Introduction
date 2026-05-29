import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/payment.js';
import { ILFormater } from './classes/ilFormater.js';
const headerFormater = (str) => {
    str = str.trim(); // Remove leading and trailing spaces
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
};
//interfaces
let test = {
    value: ["hello"]
};
console.log(test.value);
const form = document.querySelector('form');
let add = new ILFormater(document.querySelector('ul'));
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const type = document.querySelector('#type');
    const tofrom = document.querySelector('#tofrom');
    const details = document.querySelector('#details');
    const amount = document.querySelector('#amount');
    let doc;
    if (type.value === 'invoice') {
        doc = new Invoice(tofrom.value, details.value, +amount.value);
    }
    else {
        doc = new Payment(tofrom.value, details.value, +amount.value);
    }
    add.addLi(doc, headerFormater(type.value), "start");
});
