import { Router } from 'express';
import { IngredientController } from '../controllers/ingredient.controller';

const router = Router();

router.get('/', IngredientController.getAllIngredients);
router.post('/', IngredientController.addIngredient);
router.patch('/:id', IngredientController.updateIngredient);

export const ingredientRouter = router;
