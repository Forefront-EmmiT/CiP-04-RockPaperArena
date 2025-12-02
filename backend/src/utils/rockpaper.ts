import { Choice, PlayResponse, Winner } from "@shared/types/types";
import { GAME_RULES } from "../config/gameRules";

function generateComputerChoice() {
  const choices = Object.keys(GAME_RULES) as Choice[];
  const choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function generateWinner(playerChoice: Choice, computerChoice: Choice) {
  if (playerChoice == computerChoice) {
    return null;
  }

  if (GAME_RULES[playerChoice].includes(computerChoice)) {
    return playerChoice;
  }
  return computerChoice;
}

export function playRound(playerChoice: Choice): PlayResponse {
  const computerChoice = generateComputerChoice();
  const winner = generateWinner(playerChoice, computerChoice);

  let gameResult: Winner;

  if (winner === null) {
    gameResult = null;
  } else if (winner === playerChoice) {
    gameResult = "player";
  } else {
    gameResult = "computer";
  }

  return {
    winner: gameResult,
    playerChoice: playerChoice,
    computerChoice: computerChoice,
  };
}

