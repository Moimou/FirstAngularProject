import { AppareilService } from './../services/appareils.services';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single-appareil',
  templateUrl: './single-appareil.component.html',
  styleUrls: ['./single-appareil.component.scss'],
})
export class SingleAppareilComponent implements OnInit {
  nameAppareil: string = 'Appareil';
  statusAppareil: string = 'Statut';

  constructor(
    private appareilService: AppareilService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    const id = this.route.snapshot.params['id'];
    this.nameAppareil = this.appareilService.getAppareilById(+id).name;
    this.statusAppareil = this.appareilService.getAppareilById(+id).status;
  }
}
