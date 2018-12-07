import { Component, OnInit } from '@angular/core';
import { Heroi } from 'C:/Users/marcos.padilha/Documents/projetos/angular-tour-herois/src/app/heroi';
import { HEROIS } from '../herois-tontos';
import { HeroiService } from '../heroi.service';

@Component({
  selector: 'app-herois',
  templateUrl: './herois.component.html',
  styleUrls: ['./herois.component.css']
})
export class HeroisComponent implements OnInit {

  selectedHeroi: Heroi;

  herois: Heroi[];

  constructor(private heroiService: HeroiService) { }

  ngOnInit() {
    this.getHerois;
  }

  onSelect(heroi: Heroi): void{
    this.selectedHeroi = heroi;
  }

  getHerois(): void {
    this.heroiService.getHerois()
      .subscribe(herois => this.herois = herois);
  }

  // getHeroes(): void {
  //   this.herois = this.heroiService.getHerois();
  // }

  



}
