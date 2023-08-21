import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent {

  @Input() recipeToShow!: Recipe;

  constructor(private recipeService: RecipeService) { }

  addIngredientsToShoppingList(): void {
    this.recipeService.addIngredientsToShoppingList(this.recipeToShow.ingredients);
  }
}
