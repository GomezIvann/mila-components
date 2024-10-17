import { color, space, typography } from "mila-components";

// Based on: https://github.com/FormidableLabs/prism-react-renderer#theming
const theme = {
  plain: {
    color: color.grey[300],
    backgroundColor: color.grey[900],
    borderRadius: space[4],
    fontSize: "14px",
    fontFamily: typography.family.monospace,
  },
  styles: [
    {
      types: ["prolog"],
      style: {
        color: color.grey[500],
      },
    },
    {
      types: ["comment"],
      style: {
        color: color.grey[600],
      },
    },
    {
      types: ["builtin", "changed", "keyword"],
      style: {
        color: color.blue[400],
      },
    },
    {
      types: ["number", "inserted"],
      style: {
        color: color.green[300],
      },
    },
    {
      types: ["constant"],
      style: {
        color: color.blue[200],
      },
    },
    {
      types: ["attr-name", "variable"],
      style: {
        color: color.yellow[300],
      },
    },
    {
      types: ["deleted", "string", "attr-value"],
      style: {
        color: color.red[300],
      },
    },
    {
      types: ["selector"],
      style: {
        color: color.orange[300],
      },
    },
    {
      types: ["tag"],
      style: {
        color: color.green[400],
      },
    },
    {
      types: ["tag"],
      languages: ["markup"],
      style: {
        color: color.blue[400],
      },
    },
    {
      types: ["punctuation", "operator"],
      style: {
        color: color.grey[200],
      },
    },
    {
      types: ["punctuation"],
      languages: ["markup"],
      style: {
        color: color.grey[500],
      },
    },
    {
      types: ["function"],
      style: {
        color: color.yellow[300],
      },
    },
    {
      types: ["class-name"],
      style: {
        color: color.green[400],
      },
    },
    {
      types: ["char"],
      style: {
        color: color.red[300],
      },
    },
  ],
};

export default theme;
