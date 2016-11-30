import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import {Note} from './note.js';

@Injectable()
export class NotesService {
    
    constructor(private http: Http) {
        // code...
    }

    get: () => Observable<Note[]> = () => {
        return this.http.get(this.endpointUrl).map(res => res.json().items);
    }

    post: (note :Note) => Observable<Note> = (note: Note) => {
        return this.http.post(this.endpointUrl, note).map(res => {
            return res.json();
        });
    }

    delete: (id :string) => Observable<Response> = (id :string) => {
        return this.http.delete(this.endpointUrl + '/' + id);
    }

    private endpointUrl = 'api/notes';
}