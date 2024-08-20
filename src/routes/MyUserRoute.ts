import express, { Router } from "express";
import MyUserController from "../controllers/MyUserController";
import { jwtCheck, jwtParse } from "../middleware/auth";
import { vailidateMyUserRequest } from "../middleware/vailidation";

const router = express.Router();

router.get("/", jwtCheck, jwtParse, MyUserController.getCurrentUser);
router.post("/", jwtCheck, MyUserController.createCurrentUser); // /api/my/user
router.put(
  "/",
  jwtCheck,
  jwtParse,
  vailidateMyUserRequest,
  MyUserController.updateCurrentUser
);
export default router;
