import { Router } from 'express';
import { RecipeController } from '../controllers/recipe.controller';

const router = Router();

router.get('/', RecipeController.getAllRecipes);
router.post('/', RecipeController.addRecipe);
router.post('/parse', RecipeController.parseRecipes);

export const recipeRouter = router;
