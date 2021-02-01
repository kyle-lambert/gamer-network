import avatar from "../assets/avatar.jpg";
import palmTrees from "../assets/palm-trees.jpg";
import pridePerson from "../assets/pride-person.jpg";
import mountain from "../assets/mountain.jpg";

export const posts = [
  {
    _id: 1,
    author: {
      _id: 10,
      firstName: "Kyle",
      lastName: "Lambert",
      createdAt: "10/07/2020",
      hexColor: "#A3E4D7",
    },
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus doloremque labore obcaecati aut ratione maiores animi cupiditate veniam quae architecto sed inventore, itaque dolore. Accusantium itaque quo debitis eveniet?Nulla doloremque suscipit eius quis animi deleniti cupiditate sint provident impedit. Ipsam ullam doloremque temporibus repellat dicta repudiandae rerum enim quam, consectetur perferendis corrupti officia. Voluptatum non et architecto repellendus.",
  },
  {
    _id: 2,
    author: {
      _id: 11,
      avatar: avatar,
      firstName: "Troy",
      lastName: "Lambert",
      createdAt: "13th December, 2020",
      hexColor: "#ffffff",
    },
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus doloremque labore obcaecati aut ratione maiores animi cupiditate veniam quae architecto sed inventore, itaque dolore. Accusantium itaque quo debitis eveniet?Nulla doloremque suscipit eius quis animi deleniti cupiditate sint provident impedit. Ipsam ullam doloremque temporibus repellat dicta repudiandae rerum enim quam, consectetur perferendis corrupti officia. Voluptatum non et architecto repellendus.",
    image: pridePerson,
  },
  {
    _id: 3,
    author: {
      _id: 12,
      avatar: avatar,
      firstName: "Bobby",
      lastName: "Stev",
      createdAt: "1st July, 2021",
      hexColor: "#ffffff",
    },
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ducimus doloremque labore obcaecati aut ratione maiores animi cupiditate veniam quae architecto sed inventore, itaque dolore. Accusantium itaque quo debitis eveniet?Nulla doloremque suscipit eius quis animi deleniti cupiditate sint provident impedit. Ipsam ullam doloremque temporibus repellat dicta repudiandae rerum enim quam, consectetur perferendis corrupti officia. Voluptatum non et architecto repellendus.",
    image: palmTrees,
  },
];
