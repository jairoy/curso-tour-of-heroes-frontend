import { Component, Input, OnInit } from "@angular/core";
import { Hero } from "../../../core/models/model.hero";
import { HeroService } from "../../../core/services/hero.service";
import { Location } from "@angular/common";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'app-hero-detail',
    templateUrl: './hero-detail.component.html',
    styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit{
   constructor( private heroService: HeroService, 
                private location: Location,
                private route: ActivatedRoute){}

    hero!: Hero;
    isEditing!: boolean;

    ngOnInit(): void {
        this.getHero();
    }

    getHero(): void{
        const paramId = this.route.snapshot.paramMap.get('id');
        
        if (paramId === 'new') {
            this.isEditing = false;
            this.hero = {name: ''} as Hero;

        }else{
            const id = Number(paramId);
            this.isEditing =  true;
            this.heroService.getOne(id).subscribe((hero) => (this.hero = hero));
        }
        
    }
    
    goBack(): void{
        this.location.back();
    }

    isFormValid(): boolean {
        return !!this.hero.name.trim();

    }

    create(): void{
        this.heroService.create(this.hero).subscribe(() => this.goBack());
    }

    update(): void{
        this.heroService.update(this.hero).subscribe(() => this.goBack());
    }
}