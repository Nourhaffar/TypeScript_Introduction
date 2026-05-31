import { DocumentState } from '../interface/DocumentState.js';
import type { AppDocument } from './Document.js';

export class ArchivedState implements DocumentState {
    publish(document: AppDocument): void {
        console.log("Cannot publish archived document.");
    }

    archive(document: AppDocument): void {
        console.log("Document is already archived.");
    }

    edit(document: AppDocument, content: string): void {
        console.log("Cannot edit archived document.");
    }
}
