import { Injectable } from '@angular/core';
import { Heroi } from './heroi';
import { Observable, of } from 'rxjs';
import {HEROIS} from './herois-tontos';

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  getHerois(): Observable<Heroi[]> {
      return of (HEROIS);
  }


  constructor() { }
}
