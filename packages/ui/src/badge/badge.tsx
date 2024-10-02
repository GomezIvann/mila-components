import { styled } from "styled-components";
import BadgeProps from "./types";
import { color, space, typography } from "../common/core-tokens";
import Icon from "../common/icon/icon";

const getBadgeStyles = (badgeColor: BadgeProps["color"], bordered: boolean) => {
  switch (badgeColor) {
    case "purple":
      return `
        background-color: ${color.purple[200]};
        color: ${color.purple[900]};
        ${bordered ? `border: 1px solid ${color.purple[600]};` : ""}
      `;
    case "blue":
      return `
        background-color: ${color.blue[200]};
        color: ${color.blue[900]};
        ${bordered ? `border: 1px solid ${color.blue[600]};` : ""}
      `;
    case "green":
      return `
        background-color: ${color.green[200]};
        color: ${color.green[900]};
        ${bordered ? `border: 1px solid ${color.green[600]};` : ""}
      `;
    case "red":
      return `
        background-color: ${color.red[200]};
        color: ${color.red[900]};
        ${bordered ? `border: 1px solid ${color.red[600]};` : ""}
      `;
    case "yellow":
      return `
        background-color: ${color.yellow[200]};
        color: ${color.yellow[900]};
        ${bordered ? `border: 1px solid ${color.yellow[600]};` : ""}
      `;
    case "orange":
      return `
        background-color: ${color.orange[200]};
        color: ${color.orange[900]};
        ${bordered ? `border: 1px solid ${color.orange[600]};` : ""}
      `;
    case "grey":
    default:
      return `
        background-color: ${color.grey[200]};
        color: ${color.grey[900]};
        ${bordered ? `border: 1px solid ${color.grey[600]};` : ""}
      `;
  }
};

const StyledBadge = styled.span<{ $color: BadgeProps["color"]; $bordered: boolean }>`
  box-sizing: border-box;
  height: 24px;
  padding: ${space[4]} ${space[8]};
  display: flex;
  align-items: center;
  gap: ${space[4]};
  border-radius: ${space[64]};
  width: fit-content;
  ${(props) => getBadgeStyles(props.$color, props.$bordered)}
  font-family: ${typography.family.sans};
  font-size: ${typography.size.sm};
  font-weight: ${typography.weight.semibold};
  letter-spacing: ${typography.letterSpacing.normal};
`;

const Badge = ({ children, color = "grey", icon, title, variant = "default" }: BadgeProps) => (
  <StyledBadge aria-label={title} title={title} $bordered={variant === "bordered"} $color={color}>
    {icon && <Icon icon={icon} height="16px" width="16px" />}
    {children}
  </StyledBadge>
);

export default Badge;
