import { Injectable } from "@angular/core";
import { Recipe } from "./recipe.model";
import { Subject } from "rxjs";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {

  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test',
      'https://www.allrecipes.com/thmb/3x-XkV8T36df_M4tkoDbaD-WmJs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/49404-juiciest-hamburgers-ever-DDMFS-4x3-86fc27c741dd410aa365f96490c54060.jpg',
      [new Ingredient('bun', 1), new Ingredient('salad', 2)]
    ),
    new Recipe('Test recipe 2', 'This is a test',
      'https://www.allrecipes.com/thmb/3x-XkV8T36df_M4tkoDbaD-WmJs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/49404-juiciest-hamburgers-ever-DDMFS-4x3-86fc27c741dd410aa365f96490c54060.jpg',
      [new Ingredient('apple', 1), new Ingredient('onion', 2)]
    ),
  ];

  private readonly selectedRecipeSubject = new Subject<Recipe>();
  readonly selectedRecipe$ = this.selectedRecipeSubject.asObservable();

  constructor(private shoppingListService: ShoppingListService) { }

  setSelectedRecipe(recipe: Recipe): void {
    this.selectedRecipeSubject.next(recipe);
  }

  getRecipeList(): Recipe[] {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]): void {
    this.shoppingListService.addIngredientsFromDetails(ingredients);
  }
}
