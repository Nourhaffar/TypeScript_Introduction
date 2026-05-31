import { Animal } from './Animal.js';
interface DogOption {
    name?: string;
    age?: number;
    speed?: number;
}
export class Dog extends Animal {
    private speed! : number;
    constructor(option: DogOption={}) {
        super(option.name ?? "Dog", option.age ?? 1);
        this.speed = option.speed ?? 10;
    }
    public speak(): string {
        return "Woof!";
    }
}