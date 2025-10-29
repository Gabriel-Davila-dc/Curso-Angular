import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Animal } from '../../Animal';

import { List } from '../../services/list';

@Component({
  selector: 'app-item-detail',
  imports: [],
  templateUrl: './item-detail.html',
  styleUrls: ['./item-detail.css']
})
export class ItemDetail {
  animal?: Animal ;

  constructor(private list: List, private route: ActivatedRoute){
    this.getAnimal()
  }

  getAnimal(){
    const id = Number(this.route.snapshot.paramMap.get('id'))
    this.list.getItem(id).subscribe((animal) => {this.animal = animal})
  }
    }
