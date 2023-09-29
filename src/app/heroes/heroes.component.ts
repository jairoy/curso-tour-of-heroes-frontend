import { Component, OnInit } from '@angular/core';
import { Hero } from './model.hero';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})

export class HeroesComponent implements OnInit{
  displayedColumns : String[] = ['id','name'];
  heroes : Hero[] = []; 

  constructor(private heroService: HeroService){}

  ngOnInit() : void{
    this.getHeroes();
  }

  getHeroes() : void{
    this.heroService.getHeroes().subscribe((heroes) => (this.heroes = heroes));
  }

}