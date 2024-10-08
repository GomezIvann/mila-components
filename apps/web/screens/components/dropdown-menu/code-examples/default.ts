import { DropdownMenu } from "mila-components";

const code = `() => {
  return (
    <DropdownMenu
      items={[
        { label: "Actions 1", value: "1" },
        { label: "Actions 2", value: "2" },
        { label: "Actions 3", value: "3" },
      ]}
      label="Actions"
      onItemClick={(value) => alert(\`Action \${value} clicked!\`)}
    >
      Open menu
    </DropdownMenu>
  );
}`;

const scope = { DropdownMenu };

export default { code, scope };
