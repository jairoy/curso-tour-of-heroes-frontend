import { Component } from '@angular/core';
import { Hero } from './model.hero';
import { HEROES } from '../mock-heroes';


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent {
  hero: Hero = {
    id: 1,
    name: 'Woverine'
  };

  heroes = HEROES;

  selectedHero?: Hero;

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
  }

}
