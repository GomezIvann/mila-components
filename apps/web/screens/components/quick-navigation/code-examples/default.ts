import { QuickNavigation } from "mila-components";

const code = `() => {
  const links = [
    {
      label: "Introduction",
    },
    {
      label: "Foundations",
      links: [{ label: "Color" }, { label: "Spacing" }, { label: "Typography" }],
    },
    {
      label: "Components",
      links: [
        {
          label: "Button",
        },
      ],
    },
  ];

  return (
    <QuickNavigation
      links={links}
      title="Contents"
    />
  );
}`;

const scope = { QuickNavigation };

export default { code, scope };
