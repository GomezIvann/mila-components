import { styled } from "styled-components";
import Heading from "../heading/heading";
import CardProps from "./types";
import alias from "../common/alias-tokens";
import Divider from "../divider/divider";
import { color, space } from "../common/core-tokens";

const StyledCard = styled.div<{
  $interactive: boolean;
  $mediaPosition: CardProps["media"]["position"];
  $variant: CardProps["variant"];
}>`
  ${({ $interactive }) => $interactive && "all: unset;"}
  border-radius: ${alias.space.primaryBorderRadius};
  display: flex;
  ${({ $mediaPosition }) => `
    flex-direction: ${
      {
        bottom: "column-reverse",
        left: "row",
        right: "row-reverse",
        top: "column",
      }[$mediaPosition || "top"]
    };
  `};
  gap: ${space[4]};
  background-color: ${color.white};
  overflow: hidden;
  ${({ $variant }) => {
    switch ($variant) {
      case "default":
        return `box-shadow: 0 0 ${space[8]} rgba(0, 0, 0, 0.1);`;
      case "outlined":
        return `border: 1px solid ${alias.color.primaryBorder};`;
    }
  }}
  ${({ $interactive }) =>
    $interactive &&
    `
      transition: transform 0.3s ease, box-shadow 0.3s ease;
      cursor: pointer;
      
      &:hover {
        transform: scale(1.05);
        box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);
      }
      &:focus {
        outline: 2px solid ${alias.color.focus};
        outline-offset: ${alias.space.focusOffset};
      }
  `}
`;

const StyledContent = styled.div`
  padding: ${space[24]};
  display: flex;
  flex-direction: column;
  gap: ${space[16]};

  > hr {
    margin: ${space[8]} 0;
  }
`;

const Card = ({ actions, content, media, title, variant = "default", onClick }: CardProps) => (
  <StyledCard
    as={onClick ? "button" : "div"}
    onClick={onClick}
    tabIndex={onClick ? 0 : undefined}
    $interactive={onClick ? true : false}
    $mediaPosition={media.position ?? "top"}
    $variant={variant}
  >
    {media && media.source}
    <StyledContent>
      {title && (
        <Heading level={3} weight="light">
          {title}
        </Heading>
      )}
      {content}
      <Divider />
      {actions}
    </StyledContent>
  </StyledCard>
);

export default Card;
