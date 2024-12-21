import { Request, Response } from 'express';
import { RecipeService } from '../services/recipe.service';

export class RecipeController {
  static async getAllRecipes(req: Request, res: Response): Promise<void> {
    try {
      const recipes = await RecipeService.getAllRecipes();
      res.status(200).json(recipes);
    } catch (error) {
      console.log(error);
    }
  }

  static async addRecipe(req: Request, res: Response): Promise<void> {
    try {
      const recipe = await RecipeService.addRecipe(req.body);
      res.status(201).json(recipe);
    } catch (error) {
      console.log(error);
    }
  }

  static async parseRecipes(req: Request, res: Response): Promise<void> {
    try {
      const recipes = await RecipeService.parseRecipesFromText(req.body.text);
      await Promise.all(
        recipes.map((recipe) => RecipeService.addRecipe(recipe)),
      );
      res.status(201).json({ message: 'Recipes added successfully' });
    } catch (error) {
      console.log(error);
    }
  }
}
