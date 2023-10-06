import { Injectable } from '@angular/core';
import { Hero } from '../models/model.hero';
import { Observable,tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(private http: HttpClient, private messageService: MessageService){}
  
  //GET/heroes
  getAll(): Observable<Hero[]>{
    return this.http.get<[Hero]>(this.heroesUrl)
                    .pipe(tap(heroes => this.log(`fetched ${heroes.length} heroes`)));
  }

  //GET/heroes/id
  getOne(id: number): Observable<Hero>{
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`)
                    .pipe(tap(hero => this.log(`fecthed ${this.descAttributes(hero)}`)));
  }

  //POST/heroes
  create(hero: Hero): Observable<Hero>{
    return this.http.post<Hero>(this.heroesUrl, hero)
                    .pipe(tap(hero => this.log(`created ${this.descAttributes}`)));
  }

  //PUT/heroes/id
  update(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.heroesUrl}/${hero.id}`, hero)
                    .pipe(tap( hero => this.log(`updated ${this.descAttributes(hero)}`)));

  }

  private descAttributes(hero: Hero): string {
    return `Hero Id=${hero.id} and Name=${hero.name}`;
  }  

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`)

  }
}
