import type { Player, Round, Match } from "@shared/validation/types";

export function roundRobin(n: number, playerData: Player[]): Round[] {
  const players: Player[] = [...playerData];
  const allRounds: Round[] = [];
  const numRounds = n - 1;

  for (let round = 0; round < numRounds; round++) {
    const matches: Match[] = [];

    for (let i = 0; i < n / 2; i++) {
      let home: number;
      let away: number;

      if (i === 0) {
        home = 0;
        away = round + 1;
      } else {
        home = ((round + i) % (n - 1)) + 1;
        away = ((round - i + (n - 1)) % (n - 1)) + 1;
      }

      matches.push({
        playerOne: players[home].name,
        playerTwo: players[away].name,
      });
    }

    allRounds.push({
      roundNumber: round + 1,
      matches: matches,
    });
  }

  return allRounds;
}
