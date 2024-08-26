import express from "express";
import { param } from "express-validator";
import RestaurantController from "../controllers/RestaurantController";

const router = express.Router();

//
router.get(
  "/:restaurantId",
  param("restaurantId")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("O parâmetro restaurantId deve ser uma string válida"),
  RestaurantController.getRestaurant
);

router.get(
  "/search/:city", // Aqui criamos a rota , para MENU/PRATOS alterar city para name (nome do restaurante)
  param("city")
    .isString()
    .trim()
    .notEmpty()
    .withMessage("O parâmetro cidade deve ser uma string válida"),
  RestaurantController.searchRestaurant
);

export default router;
