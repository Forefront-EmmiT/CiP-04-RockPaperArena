import { Router } from "express";

import {
  getHello,
} from "../controllers/playerController";

const router = Router();

router.get("/", getHello);

export default router;
