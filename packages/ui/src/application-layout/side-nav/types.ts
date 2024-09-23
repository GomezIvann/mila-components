import { breakpoints } from "../../common/breakpoints";

type SideNavigationProps = {
  children: React.ReactNode;
  responsiveBreakpoint?: keyof typeof breakpoints;
};

export default SideNavigationProps;
