import { styled } from "styled-components";
import TableProps from "./types";
import { space, typography } from "../common/core-tokens";
import alias from "../common/alias-tokens";

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  color: ${alias.color.text};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.normal};
  letter-spacing: ${typography.letterSpacing.normal};
  line-height: ${typography.lineHeight.normal};

  th,
  td {
    text-align: left;
    padding: ${space[8]};
    border-bottom: 1px solid ${alias.color.primaryBorder};
  }
  th {
    font-weight: ${typography.weight.semibold};
    /* background-color: ${alias.color.selected}; */
  }
`;

const Table = ({ children }: TableProps) => <StyledTable>{children}</StyledTable>;

export default Table;
