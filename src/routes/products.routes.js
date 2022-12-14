import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/products.controller.js";
import { authJwt } from "../middlewares/index.js";

router.get("/", productsCtrl.getProducts);

router.get("/:productId", productsCtrl.getProductById);

router.post(
  "/",
  [authJwt.verifyToken, authJwt.isModerator],
  productsCtrl.createProduct
);

router.put(
  "/:productId",
  [authJwt.verifyToken, authJwt.isModerator],
  productsCtrl.updateProductById
);

router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.deleteProductById
);

export default router;
