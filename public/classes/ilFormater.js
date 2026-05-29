export class ILFormater {
    // private li : HTMLLIElement;
    constructor(ul) {
        this.ul = ul;
    }
    addLi(element, header, pos = "end") {
        const li = document.createElement("li");
        const h3 = document.createElement("h3");
        h3.textContent = header;
        li.appendChild(h3);
        const p = document.createElement("p");
        p.textContent = element.format();
        li.appendChild(p);
        if (pos === "start") {
            this.ul.prepend(li);
        }
        else {
            this.ul.appendChild(li);
        }
    }
}
