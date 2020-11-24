import { Component, OnInit } from '@angular/core';

import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.css']
})
export class NewHeroComponent implements OnInit {

  constructor(private heroesService: HeroesService) { }

  onCreateHero(heroName: string, heroUniverse: string) {
    this.heroesService.createHero(heroName, heroUniverse); 
  }

  ngOnInit() {
  }

}