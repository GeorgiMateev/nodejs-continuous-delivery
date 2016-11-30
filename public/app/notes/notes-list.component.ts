import { Component, OnInit} from '@angular/core';
import { Note } from './note';
import {NotesService} from './notes-service';

@Component({
    selector: 'notes-list',
    templateUrl: 'app/notes/notes-list.html',
    providers: [NotesService]
})
export class NotesListComponent implements OnInit {
    public notes: Note[];
    public newNoteText: string;
    public loading: boolean;

    constructor(private notesService: NotesService) {
        this.notes = [];
    }

    ngOnInit() {
        this.refresh();
    }

    public remove = (note: Note) => {
        this.notesService.delete(note.id).subscribe( () => {
            this.refresh();
        });
    }

    public post = () => {
        var note = new Note(this.newNoteText);

        this.notesService.post(note).subscribe((note: Note) => {
            this.refresh();
        });
        this.newNoteText = '';
    }

    private refresh = () => {
        this.loading = true;
        this.notesService.get().subscribe((notes: Note[]) => {
            this.notes = notes;
            this.loading = false;
        }, () => { this.loading = false; });
    }
}
