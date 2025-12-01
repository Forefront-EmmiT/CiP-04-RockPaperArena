import { Button } from "@mui/material";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

export const GameButton: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
}) => {
  return (
    <Button
      onClick={onClick}
      type={type}
      disabled={disabled}
      variant="contained"
    >
      {children}
    </Button>
  );
};
