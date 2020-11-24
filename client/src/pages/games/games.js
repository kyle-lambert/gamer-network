import React from "react";
import axios from "axios";
import "./games.scss";

import { debounce } from "../../utils/helpers";

import PageHeader from "../../components/page-header/page-header";
import GameCard from "../../components/game-card/game-card";

import useGames from "../../hooks/use-games";

function Games(props) {
  const { state, getGamesByPage } = useGames();
  const debouncedGetGamesByPage = debounce(getGamesByPage, 1000);

  React.useEffect(() => {
    const CancelToken = axios.CancelToken;
    const source = CancelToken.source();

    getGamesByPage(state.firstPage, source);

    return () => {
      source.cancel();
    };
  }, [getGamesByPage, state.firstPage]);

  // const handleNextPage = () => {
  //   if (state.nextPage) {
  //     debouncedGetGamesByPage(state.nextPage);
  //   }
  // };

  return (
    <div className="games">
      <PageHeader
        header="Trending Games"
        subheader="Browse trending video games and save them to your collection."
      />
      <section className="games__card-container">
        {state.results.map((game) => {
          return (
            <div key={game.id} className="games__card-item">
              <GameCard game={game} />
            </div>
          );
        })}
      </section>
      {/* <button onClick={handleNextPage}>next page</button> */}
    </div>
  );
}

export default Games;
