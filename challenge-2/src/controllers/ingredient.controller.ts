import { Request, Response } from 'express';
import { IngredientService } from '../services/ingredient.service';

export class IngredientController {
  static async getAllIngredients(req: Request, res: Response): Promise<void> {
    try {
      const ingredients = await IngredientService.getAllIngredients();
      res.status(200).json(ingredients);
    } catch (error) {
      console.log(error);
    }
  }

  static async addIngredient(req: Request, res: Response): Promise<void> {
    try {
      const ingredient = await IngredientService.addIngredient(req.body);
      res.status(201).json(ingredient);
    } catch (error) {
      console.log(error);
    }
  }

  static async updateIngredient(req: Request, res: Response): Promise<void> {
    try {
      const ingredient = await IngredientService.updateIngredient(
        req.params.id,
        req.body,
      );
      if (ingredient) {
        res.status(200).json(ingredient);
      } else {
        res.status(404).json({ message: 'Ingredient not found' });
      }
    } catch (error) {
      console.log(error);
    }
  }
}
