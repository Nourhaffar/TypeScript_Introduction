export class ArchivedState {
    publish(document) {
        console.log("Cannot publish archived document.");
    }
    archive(document) {
        console.log("Document is already archived.");
    }
    edit(document, content) {
        console.log("Cannot edit archived document.");
    }
}
