import { Router } from "express";

import {
  getHello,
  getPlayers,
  getTournamentSchedule,
  getTournamentResult,
} from "../controllers/playerController";

const router = Router();

router.get("/", getHello);
router.get("/players", getPlayers);
router.get("/schedule", getTournamentSchedule);
router.get("/result", getTournamentResult);

export default router;
