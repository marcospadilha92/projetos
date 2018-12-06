
import { Component, OnInit, Input } from '@angular/core';
import { Heroi } from '../heroi';
@Component({
  selector: 'app-heroi-detail',
  templateUrl: './heroi-detail.component.html',
  styleUrls: ['./heroi-detail.component.css']
})
export class HeroiDetailComponent implements OnInit {

  @Input() heroi = Heroi;

  constructor() { }

  ngOnInit() {
  }

}
