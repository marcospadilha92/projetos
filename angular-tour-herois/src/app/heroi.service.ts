import { Injectable } from '@angular/core';
import { Heroi } from './heroi';
import {HEROIS} from './herois-tontos';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  getHerois(): Heroi[] {
      return HEROIS;
  }


  constructor() { }
}
