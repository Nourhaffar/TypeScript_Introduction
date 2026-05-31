// import { Invoice } from './classes/Invoice.js';
// import { Payment } from './classes/payment.js';
// import { HasFormater } from './interface/hasFormater.js';
// import { ILFormater } from './classes/ilFormater.js';
// import {testing} from './interface/generic.js'
import { Customer } from './classes/Customer.js'
import { Dog } from './classes/Dog.js';

// const headerFormater = (str : string ) : string => {
//     str = str.trim(); // Remove leading and trailing spaces
//     return str[0].toUpperCase() + str.slice(1).toLowerCase();
    
// };
//interfaces


//promises and async await 

// type ApiComment = {
//     postId: number;
//     id: number;
//     name: string;
//     email: string;
//     body: string;
// };

// function fetchData(): Promise<ApiComment[]> {
//     return fetch("https://jsonplaceholder.typicode.com/comments")
//         .then((response) => {
//             if (!response.ok) {
//                 throw new Error(`HTTP error: ${response.status}`);
//             }
//             return response.json() as Promise<ApiComment[]>;
//         });
// }

// fetchData()
//     .then((data) => console.log(data))
//     .catch((error) => console.error(error)); // Output: { id: 1, title: 'delectus aut autem', completed: false }


const btn = document.getElementById('testing_btn')!;
// let add = new ILFormater(document.querySelector('ul')!);

const customer = new Customer({name:'Ishtari', email:'ishtari@gmail.com'});
const max = new Dog({name:'Max', age:3 , speed : 10});
btn.addEventListener('click', (e : Event) => {
    e.preventDefault();
    console.log(max.speak());
    // console.log(customer.formate()); // Output: Customer { name: 'Ishtari', email: 'ishtari@gmail.com', customer_id: '1234567890' } 

    // const type = document.querySelector('#type')! as HTMLSelectElement;
//     const type = document.querySelector('#type')! as HTMLSelectElement;
//     const tofrom = document.querySelector('#tofrom')! as HTMLInputElement;
//     const details = document.querySelector('#details')! as HTMLInputElement;
//     const amount = document.querySelector('#amount')! as HTMLInputElement;
//     let doc : HasFormater ;
//     if( type.value === 'invoice'){
//         doc = new Invoice(tofrom.value, details.value, +amount.value);
//     }else{
//         doc = new Payment(tofrom.value, details.value, +amount.value);
//     }
//     add.addLi(doc,headerFormater(type.value) , "start" );
})



