import { Router } from "express";
import { loginAdmin } from "../controllers/adminController.js";

const router = Router();

router.route("/login").post(loginAdmin);


export default router;
