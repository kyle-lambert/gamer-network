import { ReactComponent as Game } from "../assets/iconly/Game.svg";
import { ReactComponent as Activity } from "../assets/iconly/Activity.svg";
import { ReactComponent as Profile } from "../assets/iconly/Profile.svg";
import { ReactComponent as Setting } from "../assets/iconly/Setting.svg";

const routes = [
  { id: 1, name: "News Feed", path: "/dashboard", icon: <Game /> },
  { id: 2, name: "Trending", path: "/dashboard/trending", icon: <Activity /> },
  { id: 3, name: "Profile", path: "/dashboard/profile", icon: <Profile /> },
  { id: 4, name: "Settings", path: "/dashboard/settings", icon: <Setting /> },
];

export default routes;
