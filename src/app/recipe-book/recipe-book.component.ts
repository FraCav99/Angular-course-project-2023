import { Component } from "@angular/core";
import { Recipe } from "./recipe.model";

@Component({
  selector: 'app-recipe-book',
  styleUrls: ['./recipe-book.component.css'],
  templateUrl: './recipe-book.component.html'
})
export class RecipeBookComponent {

  selectedRecipe!: Recipe;
}
