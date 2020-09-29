import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.scss']
})
export class RecipesComponent implements OnInit {

  public selectedRecipe:Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  public onRecipeSelect(recipe:Recipe){
    this.selectedRecipe=recipe;
  }
}
