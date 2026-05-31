import { ArchivedState } from './ArchivedState.js';
export class PublishedState {
    publish(document) {
        console.log("Document is already published.");
    }
    archive(document) {
        console.log("Published document archived.");
        document.setState(new ArchivedState());
    }
    edit(document, content) {
        console.log("Cannot edit a published document.");
    }
}
