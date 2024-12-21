import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { ingredientRouter } from './routers/ingredient.router';
import { recipeRouter } from './routers/recipe.router';

// REGULAER MIDDELWARES
app.use(cors());

// APPLICATION ROUTES
app.use('/ingredients', ingredientRouter);
app.use('/recipes', recipeRouter);

app.get('/', (req: Request, res: Response) => {
  res.send('Hello From Node Typescript Clean Template Application!');
});

export default app;
