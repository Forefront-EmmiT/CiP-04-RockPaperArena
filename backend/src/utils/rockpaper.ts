import { Choice, MatchResult } from "@shared/types/types";
import { GAME_RULES } from "../config/gameRules";

export function rockPaper(): MatchResult[] {
  const result: MatchResult[] = [];
  const choices = Object.keys(GAME_RULES) as Choice[];

  function generateComputerChoice() {
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
  }

  function rockPaperWinner(homeChoice: Choice, awayChoice: Choice) {
    if (homeChoice == awayChoice) {
      return null;
    }

    if (GAME_RULES[homeChoice].includes(awayChoice)) {
      return homeChoice;
    }
    return awayChoice;
  }

  const homeChoice = "rock";
  const computerChoice = generateComputerChoice();

  const winner = rockPaperWinner(homeChoice, computerChoice);

  if (winner) {
    const loser = homeChoice === winner ? computerChoice : homeChoice;
    result.push({
      winner: winner,
      loser: loser,
    });
  }

  return result;
}
