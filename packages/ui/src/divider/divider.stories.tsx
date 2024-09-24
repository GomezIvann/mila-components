import ExampleContainer from "../../.storybook/utils/example-container";
import Flex from "../flex/flex";
import Heading from "../heading/heading";
import Paragraph from "../paragraph/paragraph";
import Divider from "./divider";

export default {
  title: "Divider",
  component: Divider,
};

export const Stories = () => (
  <>
    <Heading level={3}>Light and dark dividers</Heading>
    <ExampleContainer>
      <Flex gap={16} direction="column">
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </Paragraph>
        <Divider />
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </Paragraph>
        <Divider lightness="dark" />
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </Paragraph>
      </Flex>
    </ExampleContainer>
    <Heading level={3}>Strong and vertical</Heading>
    <ExampleContainer>
      <Flex gap={16}>
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </Paragraph>
        <Divider orientation="vertical" weight="strong" />
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </Paragraph>
        <Divider orientation="vertical" weight="strong" lightness="dark" />
        <Paragraph>
          Lorem ipsum dolor sit amet consectetur. Tincidunt sed pharetra mollis duis volutpat urna. Hendrerit aliquet et
          arcu purus. Sodales elementum sollicitudin consequat elementum tortor. Lectus eget cursus ut ac pharetra
          lobortis integer eu. Potenti amet ac id risus ac nunc orci nibh. Tempus vitae vitae aenean arcu. Nibh
          tristique porta dui enim eget tristique rutrum. Quisque faucibus suscipit nibh est sed. Netus venenatis congue
          diam in dui morbi dignissim lorem. Urna aliquet sem in tincidunt. Nunc arcu nec fringilla enim purus ut justo
          nisi. Vel mus ut ornare faucibus blandit diam sit vestibulum massa. Semper nullam sit sagittis hendrerit
          augue. In fermentum metus proin arcu faucibus proin nibh sit. Vel integer sed enim in sed vel nec ut vitae.
          Commodo sagittis volutpat id lorem.
        </Paragraph>
      </Flex>
    </ExampleContainer>
  </>
);
