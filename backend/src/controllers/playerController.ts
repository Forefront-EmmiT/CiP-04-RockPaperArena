import { Request, Response } from "express";

// const playersData: Player[] = JSON.parse(
//   fs.readFileSync(path.join(__dirname, "../../src/data/players.json"), "utf8")
// );

export const getHello = (req: Request, res: Response) => {
  res.json({ message: "hello world" });
};

