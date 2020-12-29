import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  isAuth =false;
  lastUpdate = new Date();
  Date =new Date();



  appareils =[
    {
      name:'Machine à laver',
      status:'allumé'

    },
    {
      name:'Télévision',
      status:'allumé'
    },
    {
      name:'Ordinateur',
      status:'éteint'
    }
  ];


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

  /*appareilOne='Machine à laver';
  appareilTwo='Frigo';
  appareilThree = 'Ordinateur';*/

  constructor(){
    setTimeout(
      ()=>{
        this.isAuth = true;
      },4000
    );
  }

  onAllumer(){
    console.log("on allume tout");
  }


}


