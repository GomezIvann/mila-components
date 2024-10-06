import { color, space } from "./core-tokens";

const alias = {
  color: {
    // Base colors
    focus: color.blue[400],
    interactiveHover: color.grey[100],
    interactiveActive: color.grey[200],
    primaryBorder: color.grey[200],
    secondaryBorder: color.grey[900],
    // For components with selected state
    selected: color.blue[100],
    selectedText: color.blue[900],
    hoverSelected: color.blue[200],
    // Text colors
    text: color.grey[900],
  },
  space: {
    focusOffset: space[2],
    primaryBorderRadius: space[4],
  },
};

export default alias;
