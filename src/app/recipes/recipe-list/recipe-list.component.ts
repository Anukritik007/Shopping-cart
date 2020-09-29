import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  @Output('recipe-select') public selectedRecipe:EventEmitter<Recipe> = new EventEmitter<Recipe>();

  public recipes:Recipe[]=[
    new Recipe('Butter chicken','Succulent tasty recipe','https://i.ndtvimg.com/i/2018-01/butter-chicken_620x350_51517373579.jpg'),
    new Recipe('Kadhai chicken','Succulent tasty recipe','https://i.ndtvimg.com/i/2018-01/butter-chicken_620x350_51517373579.jpg')
  
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public emitSelected(item:Recipe){
    this.selectedRecipe.emit(item);
  }

}
