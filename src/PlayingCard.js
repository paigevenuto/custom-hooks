import React from "react";
import backOfCard from "./back.png";
import "./PlayingCard.css";
import { useFlip } from "./hooks";

/* Renders a single playing card. */
function PlayingCard({ front, back = backOfCard }) {
  const [facingUp, flipCard] = useFlip(true);
  return (
    <img
      src={facingUp ? front : back}
      alt="playing card"
      onClick={flipCard}
      className="PlayingCard Card"
    />
  );
}

export default PlayingCard;
