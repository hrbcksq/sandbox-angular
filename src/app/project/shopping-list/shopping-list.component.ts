import { Ingredient } from './ingredient.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 10)
  ];

  current: Ingredient;

  constructor() { }

  ngOnInit() {
  }

  onAdd(input: Ingredient) {
    this.ingredients.push(input);
  }
  onDelete(input: Ingredient) {
    const index = this.ingredients.indexOf(input);
    if (index !== -1) {
      this.ingredients.splice(index, 1);
    }
  }
  onClear() {
    this.ingredients = new Array<Ingredient>();
  }

  onSelection(input: Ingredient) {
    this.current = input;
  }

}
