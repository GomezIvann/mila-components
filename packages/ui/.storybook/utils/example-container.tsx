import React from "react";
import styled from "styled-components";

type Props = {
  children?: React.ReactNode;
  pseudoState?:
    | "pseudo-active"
    | "pseudo-focus"
    | "pseudo-focus-visible"
    | "pseudo-focus-within"
    | "pseudo-hover"
    | "pseudo-link"
    | "pseudo-target"
    | "pseudo-visited";
  expanded?: boolean;
};

const ExampleContainer = ({ children, pseudoState, expanded = false }: Props) => (
  <StyledExampleContainer className={`${pseudoState}-all`} $expanded={expanded}>
    {children}
  </StyledExampleContainer>
);

const StyledExampleContainer = styled.div<{ $expanded: boolean }>`
  margin: 2rem;
  ${(props) => props.$expanded && "height: 100vh;"}
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export default ExampleContainer;
