function getRandomHexColor() {
  const hexColors = [
    "#F1948A",
    "#C39BD3",
    "#BB8FCE",
    "#7FB3D5",
    "#85C1E9",
    "#76D7C4",
    "#73C6B6",
    "#F8C471",
    "#E59866",
  ];
  return hexColors[Math.floor(Math.random() * hexColors.length)];
}

module.exports = getRandomHexColor;
