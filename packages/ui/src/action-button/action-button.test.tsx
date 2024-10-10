import { render, screen, fireEvent } from "@testing-library/react";
import ActionButton from "./action-button";

describe("Action button component tests", () => {
  // Test básico para renderizar el componente
  test("renders ActionButton with label", () => {
    render(<ActionButton onClick={() => {}}>Click me</ActionButton>);
    const button = screen.getByRole("button", { name: /click me/i });
    expect(button).toBeInTheDocument();
    expect(button).not.toBeDisabled();
  });
  // Test para verificar que el botón está deshabilitado
  test("renders disabled ActionButton", () => {
    render(
      <ActionButton onClick={() => {}} disabled>
        Disabled
      </ActionButton>
    );
    const button = screen.getByRole("button", { name: /disabled/i });
    expect(button).toBeDisabled();
  });
  // Test para verificar que el click llama a la función onClick
  test("calls onClick when button is clicked", () => {
    const handleClick = jest.fn();
    render(<ActionButton onClick={handleClick}>Click me</ActionButton>);
    const button = screen.getByRole("button", { name: /click me/i });
    fireEvent.click(button);
    expect(handleClick).toHaveBeenCalledTimes(1);
  });
  // Test para verificar que el aria-label se aplica cuando el título está presente
  test("renders ActionButton with aria-label from title", () => {
    render(
      <ActionButton onClick={() => {}} title="Action button">
        Label
      </ActionButton>
    );
    const button = screen.getByRole("button", { name: /action button/i });
    expect(button).toHaveAttribute("aria-label", "Action button");
  });
});
