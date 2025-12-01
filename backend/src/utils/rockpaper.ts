import { Choice, MatchResult } from "@shared/validation/types";
import { GAME_RULES } from "../config/gameRules";

export function rockPaper(): MatchResult[] {
  const result: MatchResult[] = [];

  function rockPaperController() {
    const options: Choice[] = ["rock", "paper", "scissors"];
    const random = options[Math.floor(Math.random() * options.length)];

    return random;
  }

  function rockPaperWinner(homeChoice: Choice, awayChoice: Choice) {
    if (homeChoice == awayChoice) {
      return null;
    }

    if (GAME_RULES[homeChoice] === awayChoice) {
      return homeChoice;
    }
    return awayChoice;
  }

  const homeChoice = rockPaperController();
  const awayChoice = rockPaperController();

  const winner = rockPaperWinner(homeChoice, awayChoice);

  if (winner) {
    const loser = homeChoice === winner ? awayChoice : homeChoice;
    result.push({
      winner: winner,
      loser: loser,
    });
  }

  return result;
}
