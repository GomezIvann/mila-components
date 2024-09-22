import styled from "styled-components";
import Flex from "./flex";
import Heading from "../heading/heading";

export default {
  title: "Flex",
  component: Flex,
};

export const Chromatic = () => (
  <>
    <Heading level={4}>Default</Heading>
    <Container>
      <Flex>
        <Placeholder />
        <Placeholder $minWidth="50px" />
        <Placeholder />
        <Placeholder $minWidth="50px" />
        <Placeholder $minWidth="50px" />
      </Flex>
    </Container>
    <Heading level={4}>
      Direction column, wrap, justify content end, align items center and gap
    </Heading>
    <Container>
      <Flex
        direction="column"
        wrap="wrap"
        justifyContent="end"
        alignItems="center"
        gap="1.5rem"
      >
        <Placeholder />
        <Placeholder $minWidth="100px" />
        <Placeholder />
        <Placeholder $minWidth="100px" />
        <Placeholder />
      </Flex>
    </Container>
    <Heading level={4}>
      Wrap with align content space between, row and column gaps, and as a span
    </Heading>
    <Container height="250px">
      <Flex
        wrap="wrap"
        alignContent="space-between"
        as="span"
        gap={{ rowGap: "0.5rem", columnGap: "1.5rem" }}
      >
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder />
        <Placeholder $minWidth="100px" />
        <Placeholder />
        <Placeholder />
        <Placeholder $minWidth="100px" />
        <Placeholder />
        <Placeholder />
        <Placeholder $minWidth="100px" />
        <Placeholder />
      </Flex>
    </Container>
    <Heading level={4}>Basis 100%, order, grow and align self</Heading>
    <Container height="75px">
      <Flex basis="100%">
        <Flex order={3} grow={1} alignSelf="flex-end">
          <Placeholder width="100%" $minWidth="0">
            order 3, grow 1, align self end
          </Placeholder>
        </Flex>
        <Flex order={-1} grow={4}>
          <Placeholder width="100%" $minWidth="0">
            order -1, grow 4
          </Placeholder>
        </Flex>
        <Flex order={5} grow={1}>
          <Placeholder width="100%" $minWidth="0">
            order 5, grow 1
          </Placeholder>
        </Flex>
        <Flex order={2} grow={2}>
          <Placeholder width="100%" $minWidth="0">
            order 2. grow 2
          </Placeholder>
        </Flex>
      </Flex>
    </Container>
    <Heading level={4}>Basis and shrink</Heading>
    <Container>
      <Flex basis="600px">
        <Flex shrink={4} basis="400px">
          <Placeholder width="100%" $minWidth="0">
            shrink 4
          </Placeholder>
        </Flex>
        <Flex shrink={2} basis="400px">
          <Placeholder width="100%" $minWidth="0">
            shrink 2
          </Placeholder>
        </Flex>
        <Flex shrink={1} basis="400px">
          <Placeholder width="100%" $minWidth="0">
            shrink 1
          </Placeholder>
        </Flex>
      </Flex>
    </Container>
  </>
);

const Container = styled.div<{ height?: string }>`
  display: flex;
  background: #f2eafa;
  margin: 2.5rem;
  ${({ height }) => (height ? `height: ${height}` : "max-height: 150px")};
`;

const Placeholder = styled.div<{ $minWidth?: string; width?: string }>`
  height: 40px;
  min-width: ${({ $minWidth }) => $minWidth ?? "200px"};
  width: ${({ width }) => width};
  border: 1px solid #a46ede;
  border-radius: 0.5rem;
  background-color: #e5d5f6;
`;