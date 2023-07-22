import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  @Output() updatedIngredients = new EventEmitter<Ingredient>();

  @ViewChild('name') inputName!: ElementRef;
  @ViewChild('amount') inputAmount!: ElementRef;

  addIngredient(): void {
    const name: string = this.inputName.nativeElement.value;
    const amount: string = this.inputAmount.nativeElement.value;

    if (name === '' || amount === '') {
      return;
    }

    const newIngredient: Ingredient = new Ingredient(name, parseInt(amount, 10));
    this.updatedIngredients.emit(newIngredient);
  }

}
