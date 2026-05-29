import { Invoice } from './classes/Invoice.js';
import { Payment } from './classes/payment.js';
import { HasFormater } from './interface/hasFormater.js';
import { ILFormater } from './classes/ilFormater.js';
import {testing} from './interface/generic.js'
const headerFormater = (str : string ) : string => {
    str = str.trim(); // Remove leading and trailing spaces
    return str[0].toUpperCase() + str.slice(1).toLowerCase();
    
};
//interfaces

let test : testing<string[]> = {
    value : ["hello"]
}
console.log(test.value);





const form = document.querySelector('form')!;
let add = new ILFormater(document.querySelector('ul')!);

form.addEventListener('submit', (e : Event) => {
    e.preventDefault();
    const type = document.querySelector('#type')! as HTMLSelectElement;
    const tofrom = document.querySelector('#tofrom')! as HTMLInputElement;
    const details = document.querySelector('#details')! as HTMLInputElement;
    const amount = document.querySelector('#amount')! as HTMLInputElement;
    let doc : HasFormater ;
    if( type.value === 'invoice'){
        doc = new Invoice(tofrom.value, details.value, +amount.value);
    }else{
        doc = new Payment(tofrom.value, details.value, +amount.value);
    }
    add.addLi(doc,headerFormater(type.value) , "start" );
})
