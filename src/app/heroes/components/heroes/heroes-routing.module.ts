import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroesComponent } from './heroes.component';
import { HeroDetailComponent } from '../heroe-detail/hero-detail.component';

const routes: Routes = [  
  {path: '', component: HeroesComponent},
  {path: ':id', component: HeroDetailComponent}
]

@NgModule({  
  imports: [RouterModule.forChild(routes)],  
  exports: [RouterModule]
})
export class HeroesRoutingModule { }
