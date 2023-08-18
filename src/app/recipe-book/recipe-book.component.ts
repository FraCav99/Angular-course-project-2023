import { Component, OnInit } from "@angular/core";
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";
import { Observable } from "rxjs";

@Component({
  selector: 'app-recipe-book',
  styleUrls: ['./recipe-book.component.css'],
  templateUrl: './recipe-book.component.html',
  providers: [RecipeService]
})
export class RecipeBookComponent implements OnInit {

  selectedRecipe$!: Observable<Recipe>;

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
    this.selectedRecipe$ = this.recipeService.selectedRecipe$;
  }
}
