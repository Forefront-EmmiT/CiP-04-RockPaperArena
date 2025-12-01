export type Choise = "rock" | "paper" | "scissor";

export const GAME_RULES: Record<Choise, Choise> = {
  rock: "scissor",
  scissor: "paper",
  paper: "rock",
};
