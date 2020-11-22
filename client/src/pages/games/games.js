import React from "react";
import "./games.scss";

import PageHeader from "../../components/page-header/page-header";

function Games(props) {
  return (
    <div className="games">
      <PageHeader
        header="Trending Games"
        subheader="Browse trending video games and save them to your collection."
      />
    </div>
  );
}

export default Games;
