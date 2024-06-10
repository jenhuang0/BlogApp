import express from 'express';
import { getALLUser, signup, login } from '../controllers/user-controller.js';

const router = express.Router();

router.get("/", getALLUser);
router.post("/signup", signup);
router.post("/login", login);
export default router;