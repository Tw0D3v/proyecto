import { Router } from "express";
const router = Router();

import * as authCtrl from "../controllers/auth.controller.js";
import { verifySignup } from "../middlewares/index.js";


router.use((req, res, next) => {
  res.header(
    "Access-Control-Allow-Headers",
    "x-access-token, Origin, Content-Type, Accept"
  );
  next();
});



router.get("/", (req, res) => {
  res.render('index')
})

router.post(
  "/signup",
  [verifySignup.checkDuplicateUsernameOrEmail, verifySignup.checkRolesExisted],
  authCtrl.signUp


);

router.get("/signup", (req, res) => {

  res.render('signup',{title:"session"})
})


router.post("/signin", authCtrl.signin);


router.get("/signin", (req, res) => {
  res.render('signin')
})


router.get("/home", (req, res) => {

})



export default router;
