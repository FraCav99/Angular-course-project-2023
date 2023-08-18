import { Component, ElementRef, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css']
})
export class ShoppingListEditComponent {

  @ViewChild('name') inputName!: ElementRef;
  @ViewChild('amount') inputAmount!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) { }

  addIngredient(): void {
    const name: string = this.inputName.nativeElement.value;
    const amount: string = this.inputAmount.nativeElement.value;

    if (name === '' || amount === '') {
      return;
    }

    const newIngredient: Ingredient = new Ingredient(name, parseInt(amount, 10));
    this.shoppingListService.addNewIngredient(newIngredient);
  }

}
