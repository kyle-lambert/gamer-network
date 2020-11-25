import React from "react";
import axios from "axios";
import "./games.scss";

import { debounce } from "../../utils/helpers";

import PageHeader from "../../components/page-header/page-header";
import GameCard from "../../components/game-card/game-card";

import useGames from "../../hooks/use-games";

function Games(props) {
  const { state } = useGames();

  return (
    <div className="games">
      <PageHeader
        header="Trending Games"
        subheader="Browse trending video games and save them to your collection."
      />
      <section className="games__card-container">
        {state.games.map((game) => {
          return (
            <div key={game.id} className="games__card-item">
              <GameCard game={game} />
            </div>
          );
        })}
      </section>
    </div>
  );
}

export default Games;
