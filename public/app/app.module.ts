import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import {HttpModule} from '@angular/http'

import { AppComponent }  from './app.component';
import { NotesListComponent} from './notes/notes-list.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpModule ],
  declarations: [ AppComponent, NotesListComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }