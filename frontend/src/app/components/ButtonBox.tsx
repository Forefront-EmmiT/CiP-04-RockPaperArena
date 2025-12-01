import { GameButton } from "./GameButton";
import { Box } from "@mui/material";
import React from "react";
import { Choice } from "@shared/validation/types";

interface GameButtonProps {
  onChoice: (choise: Choice) => void;
  disabled?: boolean;
}

export const GameButtons: React.FC<GameButtonProps> = ({
  onChoice,
  disabled = false,
}) => {
  return (
    <Box sx={{ display: "flex" }}>
      <GameButton onClick={() => onChoice("rock")} disabled={disabled}>
        Rock
      </GameButton>
      <GameButton onClick={() => onChoice("paper")} disabled={disabled}>
        Paper
      </GameButton>
      <GameButton onClick={() => onChoice("scissors")} disabled={disabled}>
        Scissor
      </GameButton>
    </Box>
  );
};
