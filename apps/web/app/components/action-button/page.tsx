import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Action button - Mila components",
  description: "Action button component of the Mila component library.",
};

export default function Introduction() {
  return (
    <div>
      <h1>Action button</h1>
      <p>
        The action button component is a button that triggers an action when clicked. It can be used to perform various
        actions such as submitting a form, opening a modal, or navigating to a different page.
      </p>
    </div>
  );
}
