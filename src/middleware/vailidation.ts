import { Request, Response, NextFunction } from "express";
import { body, validationResult } from "express-validator";

const handleValidationErrors = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  next();
};

export const vailidateMyUserRequest = [
  body("name").isString().notEmpty().withMessage("O nome deve ser uma string"),
  body("addressLine1")
    .isString()
    .notEmpty()
    .withMessage("O endereço deve ser uma string"),
  body("city")
    .isString()
    .notEmpty()
    .withMessage("A cidade deve ser uma string"),
  body("country")
    .isString()
    .notEmpty()
    .withMessage("O país deve ser uma string"),
  handleValidationErrors,
];

export const validateMyRestaurantRequest = [
  body("restaurantName")
    .notEmpty()
    .withMessage("O nome do restaurante é obrigatório"),
  body("city").notEmpty().withMessage("E necessario uma cidade"),
  body("country").notEmpty().withMessage("E necessario um país"),
  body("deliveryPrice")
    .isFloat({ min: 0 })
    .withMessage("O preço de entrega deve ser um número positivo"),
  body("estimatedDeliveryTime")
    .isInt({ min: 0 })
    .withMessage(
      "O tempo estimado de entrega deve ser um número inteiro positivo"
    ),
  body("cuisines")
    .isArray()
    .withMessage("Cuisines must be an array")
    .not()
    .isEmpty()
    .withMessage("Cuisines array cannot be empty"),
  body("menuItems").isArray().withMessage("Menu items must be an array"),
  body("menuItems.*.name")
    .notEmpty()
    .withMessage("O nome do item do menu é obrigatório"),
  body("menuItems.*.price")
    .isFloat({ min: 0 })
    .withMessage(
      "O preço do item do menu é obrigatório e deve ser um número positivo"
    ),
  handleValidationErrors,
];
