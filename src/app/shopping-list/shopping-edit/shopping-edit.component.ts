import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.scss'],
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', { static: false }) nameInputRef: ElementRef;
  @ViewChild('amountInput', { static: false }) amountInputRef: ElementRef;

  @Output('ingredient-added') public ingredientAdded: EventEmitter<Ingredient> = new EventEmitter<Ingredient>();
  constructor() { }

  ngOnInit(): void { }

  public onAddItem() {
    const ingredientName_ = this.nameInputRef.nativeElement.value;
    const ingredientAmount_ = this.amountInputRef.nativeElement.value;
    const newIngredient_ = new Ingredient(ingredientName_, ingredientAmount_);
    this.ingredientAdded.emit(newIngredient_);
  }
}
