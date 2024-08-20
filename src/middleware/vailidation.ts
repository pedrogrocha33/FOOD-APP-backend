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
