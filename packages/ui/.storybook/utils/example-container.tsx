import React from "react";
import styled from "styled-components";

type PseudoStates =
  | "pseudo-active"
  | "pseudo-focus"
  | "pseudo-focus-visible"
  | "pseudo-focus-within"
  | "pseudo-hover"
  | "pseudo-link"
  | "pseudo-target"
  | "pseudo-visited";

type Props = {
  children?: React.ReactNode;
  pseudoState?: PseudoStates;
  expanded?: boolean;
};

const ExampleContainer = ({
  children,
  pseudoState,
  expanded = false,
}: Props): JSX.Element => (
  <Container className={`${pseudoState}-all`} expanded={expanded}>
    {children}
  </Container>
);

const Container = styled.div<{ expanded: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: 16px;
  ${(props) => props.expanded && "height: 100vh;"}
`;

export default ExampleContainer;
