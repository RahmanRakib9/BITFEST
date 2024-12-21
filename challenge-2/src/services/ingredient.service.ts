import { IngredientModel } from '../models/ingredient.model';
import { Ingredient } from '../interfaces/ingredient.interface';

export class IngredientService {
  static async getAllIngredients(): Promise<Ingredient[]> {
    return IngredientModel.find();
  }

  static async addIngredient(data: Ingredient): Promise<Ingredient> {
    const ingredient = new IngredientModel(data);
    return ingredient.save();
  }

  static async updateIngredient(
    id: string,
    data: Partial<Ingredient>,
  ): Promise<Ingredient | null> {
    return IngredientModel.findByIdAndUpdate(id, data, { new: true });
  }
}
