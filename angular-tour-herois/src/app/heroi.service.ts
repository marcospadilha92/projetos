import { Injectable } from '@angular/core';
import { Heroi } from './heroi';
import { Observable, of } from 'rxjs';
import {HEROIS} from './herois-tontos';
import {messageService} from './messages.service'

@Injectable({
  providedIn: 'root'
})
export class HeroiService {

  constructor(private messageService: messageService) { }

  getHerois(): Observable<Heroi[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROIS);
  }

  // getHerois(): Heroi[] {
  //   return HEROIS;
  // }

 
}
