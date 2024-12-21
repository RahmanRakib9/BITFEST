import mongoose, { Schema, Document } from 'mongoose';
import { Recipe } from '../interfaces/recipe.interface';

const RecipeSchema: Schema = new Schema({
  title: { type: String, required: true },
  ingredients: [
    {
      name: { type: String },
      quantity: { type: Number },
      unit: { type: String },
    },
  ],
  steps: [{ type: String }],
  category: { type: String },
  createdAt: { type: Date, default: Date.now },
});

export const RecipeModel = mongoose.model<Recipe & Document>(
  'Recipe',
  RecipeSchema,
);
