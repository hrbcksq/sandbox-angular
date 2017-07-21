import { Recipe } from './../recipe.model';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() onSelectionChange = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe(
      'First Test Recipe',
      'This is simply a test',
      'http://www.seriouseats.com/images/2015/09/20150914-pressure-cooker-recipes-roundup-09.jpg'),
    new Recipe(
      'Second Test Recipe',
      'It\'s a test too',
      'http://www.pragueangkor.com/sites/default/files/imagecache/Stranky-Obsah/pages/obsah/about-food-and-best-dishes/best-dish-008.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }

  onSelectRecipe(selection: Recipe) {
    this.onSelectionChange.emit(selection);
  }

}
