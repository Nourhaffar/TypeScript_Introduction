import { ArchivedState } from './ArchivedState.js';
import { PublishedState } from './PublishedState.js';
export class DraftState {
    publish(document) {
        console.log("Document published.");
        document.setState(new PublishedState());
    }
    archive(document) {
        console.log("Draft document archived.");
        document.setState(new ArchivedState());
    }
    edit(document, content) {
        document.setContent(content);
        console.log("Draft document edited.");
    }
}
