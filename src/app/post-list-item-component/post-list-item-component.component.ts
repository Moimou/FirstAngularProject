import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {

  @Input() postItemTitle: string;
  @Input() postItemContent: string;

  btnLoveIt= false;
  btnHateIt= false;
  lastUpdate = new Date();

  constructor() {

  }

  ngOnInit(): void {
  }

  getColor(){
    if(this.btnLoveIt===true){
      return 'green';
    }else if(this.btnHateIt===true){
      return 'red';
    }
  }

  onLove(){
    this.btnLoveIt= true;
    this.btnHateIt= false;
    return this.btnLoveIt
  }

  onHate(){
    this.btnHateIt= true;
    this.btnLoveIt= false;
    return this.btnHateIt
  }
}
