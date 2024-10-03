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
  table-layout: fixed;
  overflow: auto;

  th,
  td {
    text-align: left;
    padding: ${space[8]};
    border-bottom: 1px solid ${alias.color.primaryBorder};
    word-wrap: break-word;
    overflow-wrap: break-word;
  }
  th {
    font-weight: ${typography.weight.semibold};
  }
`;

const Table = ({ children }: TableProps) => <StyledTable>{children}</StyledTable>;

export default Table;
