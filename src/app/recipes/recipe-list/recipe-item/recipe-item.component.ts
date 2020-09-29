import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.scss'],
})
export class RecipeItemComponent implements OnInit {

  @Output('selected-item') public selectedItem:EventEmitter<Recipe> = new EventEmitter<Recipe>();
  @Input() recipe: Recipe ;

  constructor() {}

  ngOnInit() {}

  public onItemClick(item:Recipe){
    this.selectedItem.emit(item);
  }
}
