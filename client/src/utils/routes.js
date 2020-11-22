import { v4 as uuidv4 } from "uuid";

export const accountRoutes = [
  {
    id: uuidv4(),
    name: "General",
    path: "/account",
  },
  {
    id: uuidv4(),
    name: "Profile",
    path: "/account/profile",
  },
  {
    id: uuidv4(),
    name: "Delete",
    path: "/account/delete",
  },
];
