import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Animal } from '../../Animal';
import { List } from '../../services/list'; 

@Component({
  selector: 'app-list-render',
  imports: [CommonModule],
  templateUrl: './list-render.html',
  styleUrl: './list-render.css'
})
export class ListRender {

  animals: Animal[] = [];

  animalDetails: string = '';

  constructor(private list: List) {
    this.getAnimals()
  }

  showDetails(animal: Animal) {
    this.animalDetails = `Esse ${animal.type} se chama ${animal.name} e tem ${animal.age} anos.`;
  }

  removeAnimal(animal: Animal) {
    this.animals = this.list.remove(this.animals, animal);
  }

  getAnimals(): void {
    this.list.getAll().subscribe((animals) => (this.animals = animals));
  }
}
