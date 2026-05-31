import { Animal } from './Animal.js';
export class Dog extends Animal {
    constructor(option = {}) {
        var _a, _b, _c;
        super((_a = option.name) !== null && _a !== void 0 ? _a : "Dog", (_b = option.age) !== null && _b !== void 0 ? _b : 1);
        this.speed = (_c = option.speed) !== null && _c !== void 0 ? _c : 10;
    }
    speak() {
        return "Woof!";
    }
}
