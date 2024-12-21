import { RecipeModel } from '../models/recipe.model';
import { Recipe } from '../interfaces/recipe.interface';

export class RecipeService {
  static async getAllRecipes(): Promise<Recipe[]> {
    return RecipeModel.find();
  }

  static async addRecipe(data: Recipe): Promise<Recipe> {
    const recipe = new RecipeModel(data);
    return recipe.save();
  }

  static async parseRecipesFromText(text: string): Promise<Recipe[]> {
    const recipes = text.split('\n\n').map((recipeText) => {
      const [title, ...lines] = recipeText.split('\n');
      const ingredients: { name: string; quantity: number; unit: string }[] =
        [];
      const steps: string[] = [];

      lines.forEach((line) => {
        if (line.startsWith('Step:')) {
          steps.push(line.replace('Step:', '').trim());
        } else {
          const [name, quantity, unit] = line.split(' - ');
          ingredients.push({ name, quantity: Number(quantity), unit });
        }
      });

      return { title, ingredients, steps };
    });

    return recipes;
  }
}
