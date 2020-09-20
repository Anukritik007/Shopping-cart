import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {

  public recipes:Recipe[]=[
    new Recipe('Butter chicken','Succulent tasty recipe','https://i.ndtvimg.com/i/2018-01/butter-chicken_620x350_51517373579.jpg')
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
