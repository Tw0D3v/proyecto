import { Router } from "express";
const router = Router();

import * as usersCtrl from "../controllers/user.controller.js";
import { authJwt, verifySignup } from "../middlewares/index.js";

router.post(
  "/",
  [
    authJwt.verifyToken,
    authJwt.isAdmin,
    verifySignup.checkDuplicateUsernameOrEmail,
  ],
  usersCtrl.createUser
);

export default router;
