import { Request, Response, Router } from 'express';
import { recipeRouter } from './recipe.router';
import { ingredientRouter } from './ingredient.router';



export const globalRouter = Router({ mergeParams: true });

globalRouter.get('/', async (_: Request, res: Response) => {
  res.send({ message: 'Hello api' });
});

globalRouter.use('/recipe', recipeRouter);
globalRouter.use('/ingredient', ingredientRouter);