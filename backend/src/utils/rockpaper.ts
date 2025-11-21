import { MatchResult } from "@shared/validation/types";

export function rockPaper(): MatchResult[] {
  const result: MatchResult[] = [];

  function rockerPapaperController() {
    const options = ["rock", "paper", "scissors"];
    const random = options[Math.floor(Math.random() * options.length)];

    return random;
  }

  function rockPaperWinner(homeChoise: string, awayChoise: string) {
    if (homeChoise == awayChoise) {
      return null;
    }

    if (
      (homeChoise == "rock" && awayChoise == "scissors") ||
      (homeChoise == "scissors" && awayChoise == "paper") ||
      (homeChoise == "paper" && awayChoise == "rock")
    ) {
      return homeChoise;
    }
    return awayChoise;
  }

  const homeChoise = rockerPapaperController();
  const awayChoise = rockerPapaperController();

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
