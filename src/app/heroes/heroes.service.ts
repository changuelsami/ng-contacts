import { Injectable } from '@angular/core';

@Injectable()
export class HeroesService {

  constructor() { }

  getHeroes() {
  	return [
  		{id: 10, name: 'Superman'},
  		{id: 12, name: 'Batman'},
  		{id: 15, name: 'Wonderwoman'},
  		{id: 16, name: 'Superman'},
  		{id: 17, name: 'Batman'},
  		{id: 19, name: 'Wonderwoman'},
  	];
  }

}
