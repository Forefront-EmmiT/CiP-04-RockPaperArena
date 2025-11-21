import { Request, Response } from "express";
import { getAllPlayers } from "../services/playerService";
import { error } from "console";
import { roundRobin } from "../utils/roundRobin";
import { rockPaper } from "../utils/rockpaper";

export const getHello = (req: Request, res: Response) => {
  res.json({ message: "hello world" });
};

export const getPlayers = async (req: Request, res: Response) => {
  const players = await getAllPlayers();

  try {
    res.json({
      total: players.length,
      players: players,
    });
  } catch {
    console.error("Error fetching players:", error);
    res.status(500).json({ error: "Failed to fetch players from database" });
  }
};

export const getTournamentSchedule = async (req: Request, res: Response) => {
  const data = await getAllPlayers();
  const playerCount = data.length;

  const result = roundRobin(playerCount, data);
  res.json({ players: result });
};

export const getTournamentResult = async (req: Request, res: Response) => {
  // const data = await getAllPlayers();

  const result = rockPaper();

  res.json({ players: result });
};
