import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/heroe-detail/hero-detail.component';
import { FormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { HeroesRoutingModule } from './components/heroes/heroes-routing.module';



@NgModule({
  declarations: [HeroesComponent, HeroDetailComponent],
  imports: [
    CommonModule, FormsModule, MaterialModule,HeroesRoutingModule
  ]
})
export class HeroesModule { }
