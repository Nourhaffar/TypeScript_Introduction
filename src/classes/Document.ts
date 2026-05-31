
import { DocumentState } from '../interface/DocumentState.js';
import { DraftState } from '../classes/DraftState.js';

export class AppDocument {
    private state: DocumentState;
    private content: string = "";

    constructor() {
        this.state = new DraftState(); // default state
    }

    setState(state: DocumentState): void {
        this.state = state;
    }

    setContent(content: string): void {
        this.content = content;
    }

    getContent(): string {
        return this.content;
    }

    publish(): void {
        this.state.publish(this);
    }

    archive(): void {
        this.state.archive(this);
    }

    edit(content: string): void {
        this.state.edit(this, content);
    }
}
