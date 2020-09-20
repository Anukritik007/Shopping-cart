import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.scss']
})
export class ShoppingListComponent implements OnInit {

  public ingredients:Ingredient[]=[
    new Ingredient('Chicken',1),
    new Ingredient('Butter',2)
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
