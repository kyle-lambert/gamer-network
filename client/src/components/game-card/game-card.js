import React from "react";
import { Link } from "react-router-dom";
import "./game-card.scss";

function GameCard({ game }) {
  const { name, background_image } = game;
  return (
    <div className="game-card">
      <div className="game-card__image-wrap">
        {background_image && (
          <img src={background_image} alt="" className="game-card__img" />
        )}
      </div>
      <div className="game-card__content">
        <h2 className="game-card__name">{name}</h2>
      </div>
    </div>
  );
}

export default GameCard;
