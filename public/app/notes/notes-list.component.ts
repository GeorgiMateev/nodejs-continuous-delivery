import { Component} from '@angular/core';
import { Note } from './note';

@Component({
    selector: 'notes-list',
    templateUrl: 'app/notes/notes-list.html'
})
export class NotesListComponent {
    public notes: Note[];
    public newNoteText: string;

    constructor() {
        this.notes = [];
    }

    public add = (note: Note) => {
        this.notes.push(note);
    }

    public remove = (note: Note) => {

    }

    public post = () => {
        var note = new Note(this.newNoteText);
        this.notes.push(note);
        this.newNoteText = '';
    }
}
