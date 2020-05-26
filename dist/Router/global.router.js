"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.globalRouter = void 0;
const express_1 = require("express");
const recipe_router_1 = require("./recipe.router");
const ingredient_router_1 = require("./ingredient.router");
exports.globalRouter = express_1.Router({ mergeParams: true });
exports.globalRouter.get('/', (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.send({ message: 'Hello api' });
}));
exports.globalRouter.use('/recipe', recipe_router_1.recipeRouter);
exports.globalRouter.use('/ingredient', ingredient_router_1.ingredientRouter);
//# sourceMappingURL=global.router.js.map