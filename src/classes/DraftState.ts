import { DocumentState } from '../interface/DocumentState.js';
import type { AppDocument } from './Document.js';
import { ArchivedState } from './ArchivedState.js';
import { PublishedState } from './PublishedState.js';

export class DraftState implements DocumentState {
    publish(document: AppDocument): void {
        console.log("Document published.");
        document.setState(new PublishedState());
    }

    archive(document: AppDocument): void {
        console.log("Draft document archived.");
        document.setState(new ArchivedState());
    }

    edit(document: AppDocument, content: string): void {
        document.setContent(content);
        console.log("Draft document edited.");
    }
}
