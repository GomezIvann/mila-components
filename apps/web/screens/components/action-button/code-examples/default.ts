import { ActionButton } from "mila-components";

const code = `() => {
  return (
    <ActionButton onClick={() => alert("Action button clicked!")}>
      Click me
    </ActionButton>
  );
}`;

const scope = { ActionButton };

export default { code, scope };
