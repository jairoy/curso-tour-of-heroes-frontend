import { Injectable } from '@angular/core';
import { Hero } from '../models/model.hero';
import { Observable, of, tap } from 'rxjs';
import { MessageService } from './message.service';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  private heroesUrl = `${environment.baseUrl}/heroes`;

  constructor(private http: HttpClient, private messageService: MessageService){}

  getAll(): Observable<Hero[]>{
    return this.http.get<[Hero]>(this.heroesUrl)
                    .pipe(tap(heroes => this.log(`fetched ${heroes.length} heroes`)));
  }

  getOne(id: number): Observable<Hero>{
    return this.http.get<Hero>(`${this.heroesUrl}/${id}`)
                    .pipe(tap(hero => this.log(`fecthed hero id=${id} and name=${hero.name}`)));
  }

  update(hero: Hero): Observable<Hero> {
    return this.http.put<Hero>(`${this.heroesUrl}/${hero.id}`, hero)
                    .pipe(tap( hero => this.log(`updated hero id=${hero.id} and name=${hero.name}`)));

  }

  private log(message: string): void {
    this.messageService.add(`HeroService: ${message}`)

  }
}
