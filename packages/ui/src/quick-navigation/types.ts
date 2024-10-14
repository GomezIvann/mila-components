type QuickNavigationProps = {
  links: {
    label: string;
    links?: {
      label: string;
    }[];
  }[];
  title?: string;
};

export default QuickNavigationProps;
