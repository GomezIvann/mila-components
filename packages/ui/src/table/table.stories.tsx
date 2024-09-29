import Heading from "../heading/heading";
import ExampleContainer from "../../.storybook/utils/example-container";
import Table from "./table";

export default {
  title: "Table",
  component: Table,
};

export const Stories = () => (
  <ExampleContainer>
    <Heading level={3}>Default</Heading>
    <Table>
      <thead>
        <tr>
          <th>Header 1</th>
          <th>Header 2</th>
          <th>Header 3</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Row 1, Cell 1</td>
          <td>Row 1, Cell 2</td>
          <td>Row 1, Cell 3</td>
        </tr>
        <tr>
          <td>Row 2, Cell 1</td>
          <td>Row 2, Cell 2</td>
          <td>Row 2, Cell 3</td>
        </tr>
        <tr>
          <td>Row 3, Cell 1</td>
          <td>Row 3, Cell 2</td>
          <td>Row 3, Cell 3</td>
        </tr>
      </tbody>
    </Table>
  </ExampleContainer>
);
