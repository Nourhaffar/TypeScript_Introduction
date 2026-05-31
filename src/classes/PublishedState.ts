import { DocumentState } from '../interface/DocumentState.js';
import type { AppDocument } from './Document.js';
import { ArchivedState } from './ArchivedState.js';

export class PublishedState implements DocumentState {
    publish(document: AppDocument): void {
        console.log("Document is already published.");
    }

    archive(document: AppDocument): void {
        console.log("Published document archived.");
        document.setState(new ArchivedState());
    }

    edit(document: AppDocument, content: string): void {
        console.log("Cannot edit a published document.");
    }
}
