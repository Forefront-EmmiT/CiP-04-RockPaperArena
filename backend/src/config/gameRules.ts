import type { Choice } from "@shared/validation/types";

export const GAME_RULES: Record<Choice, Choice> = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};
