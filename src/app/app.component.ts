import { Component } from '@angular/core';

@Component({//Decorator
  selector: 'app-root',//comment appeler un composant <app-root>
  templateUrl: './app.component.html',//partie "visible"HTML
  styleUrls: ['./app.component.css']//style associé au rendu HTML du composant
})
export class AppComponent {

  title = 'tour-of-heroes';
}
