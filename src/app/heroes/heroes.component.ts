import { Component, OnInit, Input } from '@angular/core';
import {HeroesService} from '../heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  @Input() hero: {name: string, universe: string};
  @Input() id: number;

  constructor(private heroesService: HeroesService) { }

  ngOnInit() {
  }

  removeHero() {
    this.heroesService.removeHero(this.id);
  }
}