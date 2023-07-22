import { Component } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent {

  ingredients: Ingredient[] = [
    new Ingredient('hambuger', 2),
    new Ingredient('salad', 2),
    new Ingredient('bun', 2)
  ];

  updateIngredients(newIngredient: Ingredient): void {
    this.ingredients = [...this.ingredients, newIngredient];
  }
}
