import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes: Hero[];
  selectedHero: Hero;

  constructor(private heroService: HeroService, private messageService :  MessageService) {}

  // Se trata de un evento que se ejecuta en el inicio del componente.
  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
        .subscribe(heroes => this.heroes = heroes);
  }
  
  // Ahora no se utiliza gracias a los links
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id} with name ${hero.name}`);
  }

}
