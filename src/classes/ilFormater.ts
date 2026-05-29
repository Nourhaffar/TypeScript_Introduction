import { HasFormater } from '../interface/hasFormater.js';

export class ILFormater {
    private ul : HTMLUListElement;
    // private li : HTMLLIElement;

    constructor(ul : HTMLUListElement){
        this.ul = ul;
    }
    addLi(element : HasFormater,header : string , pos : "start" | "end" = "end" ){
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        h3.textContent = header;
        li.appendChild(h3);
        const p = document.createElement("p");
        p.textContent = element.format();
        li.appendChild(p);
        if(pos === "start"){
            this.ul.prepend(li);
        }else{
            this.ul.appendChild(li);
        }
    }
}