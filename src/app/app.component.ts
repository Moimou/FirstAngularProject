import { Component, OnInit } from '@angular/core';
import { AppareilService } from './services/appareils.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  posts = [
    {
      title: 'Mon premier livre',
      content:
        'loremp ipsum dolor loremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolor',
      loveIts: 0,
      created_at: Date,
    },
    {
      title: 'Mon deuxième livre',
      content:
        'loremp ipsum dolor loremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolor',
      loveIts: 0,
      created_at: Date,
    },
    {
      title: 'Mon troisième livre',
      content:
        'loremp ipsum dolor loremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolor',
      loveIts: 0,
      created_at: Date,
    },
  ];

  /*appareilOne='Machine à laver';
  appareilTwo='Frigo';
  appareilThree = 'Ordinateur';*/
  constructor() {}
}
