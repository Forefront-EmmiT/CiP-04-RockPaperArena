import { MatchResult } from "@shared/validation/types";
import { Choise, GAME_RULES } from "../config/gameRules";

export function rockPaper(): MatchResult[] {
  const result: MatchResult[] = [];

  function rockPaperController() {
    const options: Choise[] = ["rock", "paper", "scissor"];
    const random = options[Math.floor(Math.random() * options.length)];

    return random;
  }

  function rockPaperWinner(homeChoise: Choise, awayChoise: Choise) {
    if (homeChoise == awayChoise) {
      return null;
    }

    if (GAME_RULES[homeChoise] === awayChoise) {
      return homeChoise;
    }
    return awayChoise;
  }

  const homeChoise = rockPaperController();
  const awayChoise = rockPaperController();

  const winner = rockPaperWinner(homeChoise, awayChoise);

  if (winner) {
    const loser = homeChoise === winner ? awayChoise : homeChoise;
    result.push({
      winner: winner,
      loser: loser,
    });
  }

  return result;
}
