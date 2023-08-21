import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {
  private ingredients: Ingredient[] = [
    new Ingredient('hamburger', 2),
    new Ingredient('salad', 2),
    new Ingredient('bun', 2)
  ];

  private readonly ingredientsSubject = new BehaviorSubject<Ingredient[]>(this.ingredients.slice());
  readonly ingredients$ = this.ingredientsSubject.asObservable();

  /*private ingredients: Map<string, Ingredient> = new Map([
    ['hamburger', new Ingredient('hamburger', 2)],
    ['salad', new Ingredient('salad', 2)],
    ['bun', new Ingredient('bun', 2)]
  ])*/

  getIngredients(): Ingredient[] {
    return this.ingredients.slice();
  }

  addNewIngredient(newIngredient: Ingredient): void {
    this.ingredients.push(newIngredient);
    this.ingredientsSubject.next(this.ingredients.slice());
  }

  addIngredientsFromDetails(ingredients: Ingredient[]): void {
    for (const ingredient of ingredients) {
      this.ingredients.push(ingredient);
    }

    this.ingredientsSubject.next(this.ingredients.slice());
  }
}
