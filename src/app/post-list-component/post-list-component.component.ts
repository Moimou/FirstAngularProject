import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-component',
  templateUrl: './post-list-component.component.html',
  styleUrls: ['./post-list-component.component.scss']
})
export class PostListComponentComponent implements OnInit {


  posts = [
    {
    title: "Mon premier livre",
    content: "loremp ipsum dolor loremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolor",
    loveIts: 0,
    created_at: Date
    },
    {
      title: "Mon deuxième livre",
      content: "loremp ipsum dolor loremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolor",
      loveIts: 0,
      created_at: Date
      },
    {
        title: "Mon troisième livre",
        content: "loremp ipsum dolor loremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolorloremp ipsum dolor",
        loveIts: 0,
        created_at: Date
        }
   ];

  constructor() { }

  ngOnInit(): void {
  }

}
