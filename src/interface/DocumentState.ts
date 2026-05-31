import type { AppDocument } from '../classes/Document.js';

export interface DocumentState {
    publish(document: AppDocument): void;
    archive(document: AppDocument): void;
    edit(document: AppDocument, content: string): void;
}
