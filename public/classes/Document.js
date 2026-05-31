import { DraftState } from '../classes/DraftState.js';
export class AppDocument {
    constructor() {
        this.content = "";
        this.state = new DraftState(); // default state
    }
    setState(state) {
        this.state = state;
    }
    setContent(content) {
        this.content = content;
    }
    getContent() {
        return this.content;
    }
    publish() {
        this.state.publish(this);
    }
    archive() {
        this.state.archive(this);
    }
    edit(content) {
        this.state.edit(this, content);
    }
}
