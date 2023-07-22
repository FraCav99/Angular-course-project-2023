import { Component, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {

  @Output() selectedRecipeFromList = new EventEmitter<Recipe>();

  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test',
      'https://www.allrecipes.com/thmb/3x-XkV8T36df_M4tkoDbaD-WmJs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/49404-juiciest-hamburgers-ever-DDMFS-4x3-86fc27c741dd410aa365f96490c54060.jpg'
    ),
    new Recipe('Test recipe 2', 'This is a test',
      'https://www.allrecipes.com/thmb/3x-XkV8T36df_M4tkoDbaD-WmJs=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/49404-juiciest-hamburgers-ever-DDMFS-4x3-86fc27c741dd410aa365f96490c54060.jpg'
    ),
  ];

}
