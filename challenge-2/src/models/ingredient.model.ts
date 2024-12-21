import mongoose, { Schema, Document } from 'mongoose';
import { Ingredient } from '../interfaces/ingredient.interface';

const IngredientSchema: Schema = new Schema({
  name: { type: String, required: true },
  quantity: { type: Number, default: 0 },
  unit: { type: String },
  updatedAt: { type: Date, default: Date.now },
});

export const IngredientModel = mongoose.model<Ingredient & Document>(
  'Ingredient',
  IngredientSchema,
);
