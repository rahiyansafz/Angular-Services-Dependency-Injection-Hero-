export class HeroesService {
  heroes = [
    {
      name: 'Captain America',
      universe: 'Marvel'
    },
    {
      name: 'Iron Man',
      universe: 'Marvel'
    },
    {
      name: 'Wonder Woman',
      universe: 'DC'
    },
    {
      name: 'Flash',
      universe: 'DC'
    }
  ]

  createHero(name: string, universe: string) {
    this.heroes.push({name: name, universe: universe});
  }

  removeHero(id:number) { 
    this.heroes.splice(id, 1); 
  }
}