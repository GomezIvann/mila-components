import { color, space } from "./core-tokens";

const alias = {
  color: {
    focus: color.blue[400],
    hoverSelected: color.blue[200],
    interactiveHover: color.grey[100],
    interactiveActive: color.grey[200],
    primaryBorder: color.grey[200],
    secondaryBorder: color.grey[900],
    selected: color.blue[100],
    selectedText: color.blue[900],
    text: color.grey[900],
  },
  space: {
    focusOffset: space[2],
    primaryBorderRadius: space[4],
    secondaryBorderRadius: space[8],
  },
};

export default alias;
