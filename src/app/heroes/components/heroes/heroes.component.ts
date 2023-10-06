import { Component, OnInit } from '@angular/core';
import { Hero } from '../../../core/models/model.hero';
import { HeroService } from '../../../core/services/hero.service';
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
    this.heroService.getAll().subscribe((heroes) => (this.heroes = heroes));
  }

}