import { color, space } from "./core-tokens";

const alias = {
  color: {
    focus: color.blue[400],
    interactiveHover: color.grey[100],
    interactiveActive: color.grey[200],
    selected: color.blue[100],
    selectedText: color.blue[900],
    hoverSelected: color.blue[200],
    text: color.grey[900],
    primaryBorder: color.grey[200],
  },
  space: {
    focusOffset: space[2],
    borderRadius: space[4],
  },
};

export default alias;
