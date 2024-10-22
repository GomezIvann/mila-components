<p align="center">
  <a href="https://mila-components.vercel.app/">
    <img src="apps/web/common/assets/mila-icon.svg" alt="Mila icon" width="80px" />
  </a>
</p>
<h1 align="center">Mila components</h1>

Mila components is a humble library of reusable components, based on React framework, developed as a final
master thesis project.

## How to use

You can install the library right now via npm:

```bash
npm i mila-components
```

### Usage

```jsx
import { Button, Heading, TextInput } from "mila-components";

const Example = () => (
  <>
    <Heading>Mila components</Heading>
    <TextInput label="Enter your name" placeholder="John Doe" />
    <Button type="submit" onClick={() => alert("Submitted!")}>
      Submit
    </Button>
  </>
);
```

## Where to find more

Learn everything about Mila design foundations and components in the [official documentation site](https://mila-components.vercel.app/).
