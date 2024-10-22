import { Flex, Paragraph } from "mila-components";

const code = `() => {
  return (
    <Flex direction="column" gap={24}>
      <Paragraph>
        Mila components is a humble library of reusable components, based on React framework, 
        developed as a final master thesis project.
      </Paragraph>
      <Paragraph>
        The main goal of this project is to provide a set of components that can be easily reused in any project, 
        with a focus on accessibility and usability, while also providing a consistent design, 
        so the users can focus on building their projects.
      </Paragraph>
    </Flex>
  );
}`;

const scope = { Flex, Paragraph };

export default { code, scope };
