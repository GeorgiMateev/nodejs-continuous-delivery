import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `<h1>Hello {{name}}</h1><notes-list></notes-list>`,
})
export class AppComponent  { name = 'Angular'; }