import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService {

  private ingredients: Map<string, Ingredient> = new Map([
    ['hamburger', new Ingredient('hamburger', 2)],
    ['salad', new Ingredient('salad', 2)],
    ['bun', new Ingredient('bun', 2)]
  ]);

  private readonly ingredientsSubject = new BehaviorSubject<Ingredient[]>(this.getIngredients());
  readonly ingredients$ = this.ingredientsSubject.asObservable();

  getIngredients(): Ingredient[] {
    return Array.from(this.ingredients.values()).slice();
  }

  private setIngredients(newIngredient: Ingredient): void {
    if (this.ingredients.has(newIngredient.name)) {
      const existingIngredient = this.ingredients.get(newIngredient.name) as Ingredient;
      existingIngredient.updateAmount(newIngredient.amount);
    } else {
      this.ingredients.set(newIngredient.name, new Ingredient(newIngredient.name, newIngredient.amount));
    }
  }

  addNewIngredient(newIngredient: Ingredient): void {
    this.setIngredients(newIngredient);
    this.ingredientsSubject.next(this.getIngredients());
  }

  addIngredientsFromDetails(ingredients: Ingredient[]): void {
    for (const ingredient of ingredients) {
      this.setIngredients(ingredient);
    }

    this.ingredientsSubject.next(this.getIngredients());
  }
}
