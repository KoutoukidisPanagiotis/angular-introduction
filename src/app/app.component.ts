import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports:[],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  name = 'Panagiotis';
  person = {
    givenName: 'Panagiotis',
    surName: 'Koutoukidis',
    age: 27,
    email: 'koutoukidis_panagiotis@hotmail.com',
  }
}
