import { Component } from '@angular/core';
import { HeroesService } from './heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent  {

  heroes;
  selectedHero;
  tempName:string="";

  displayAddForm:boolean = false;
  constructor() {
  	let s = new HeroesService();
  	this.heroes = s.getHeroes();
  }

  removeHero(h) {
  	if(!confirm("Supprimer"))
  		return;
  	let n = this.heroes.indexOf(h);
  	console.log(n);
  	this.heroes.splice(n, 1);
  	this.selectedHero = null;
  }

  addHero() {
  	let lastHero = this.heroes[this.heroes.length-1];
  	let newId = lastHero.id + 1;
  	let newHero = {id: newId, name: this.tempName};
  	this.heroes.push(newHero);

  	this.tempName = "";
  	this.displayAddForm = false;
  }

}
