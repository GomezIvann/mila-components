import { Button } from "mila-components";

const code = `() => {
  return (
    <Button onClick={() => alert("Button clicked!")}>
      Click me
    </Button>
  );
}`;

const scope = { Button };

export default { code, scope };
