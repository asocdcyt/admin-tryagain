import { Router } from 'express';
import * as usersCtrl from '../controllers/users.controller';
import { isNotAuthenticated } from "../helpers/auth";

const router = Router();

router.get("/signup", isNotAuthenticated, usersCtrl.renderSignUpForm);

router.post('/signup', isNotAuthenticated, usersCtrl.signupPOST)

router.get("/", isNotAuthenticated, usersCtrl.renderSigninForm);

router.post("/", isNotAuthenticated, usersCtrl.signinPOST);

router.get("/logout", usersCtrl.logout);

export default router;