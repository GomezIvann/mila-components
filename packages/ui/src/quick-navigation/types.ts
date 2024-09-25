type QuickNavigationProps = {
  title?: string;
  links: {
    label: string;
    links?: {
      label: string;
    }[];
  }[];
};

export default QuickNavigationProps;
