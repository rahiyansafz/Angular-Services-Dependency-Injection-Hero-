import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NewHeroComponent } from './new-hero/new-hero.component';

import { HeroesService } from './heroes.service';
import { HeroesComponent } from './heroes/heroes.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, NewHeroComponent, HeroesComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [ HeroesService ]
})
export class AppModule { }
