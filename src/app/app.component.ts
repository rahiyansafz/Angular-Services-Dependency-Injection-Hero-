import { Component, OnInit } from '@angular/core';
import {HeroesService} from './heroes.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent implements OnInit  {
  //create heroes array
  heroes: {name: string, universe: string}[] = [];
  
  //inject HeroesService as a constructor parameter
  constructor(private heroesService: HeroesService) {}

 ngOnInit() {
   //Instantiate heroes array with the HeroesService heroes array
   this.heroes = this.heroesService.heroes;
 }
}
