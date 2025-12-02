import type { Choice } from "@shared/types/types";

export const GAME_RULES: Record<Choice, Choice[]> = {
  rock: ["scissors"],
  scissors: ["paper"],
  paper: ["rock"],
};
