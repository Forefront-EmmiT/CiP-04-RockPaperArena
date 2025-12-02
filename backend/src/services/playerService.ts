import { Player } from "@shared/types/types";
import { pool } from "../db/config";
import { RowDataPacket } from "mysql2/promise";

interface PlayerRow extends RowDataPacket, Player {}

export async function getAllPlayers(): Promise<Player[]> {
  const [rows] = await pool.query<PlayerRow[]>(
    "SELECT id, name FROM players ORDER BY id"
  );
  return rows as Player[];
}
