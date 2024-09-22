import { styled } from "styled-components";
import { IconProp } from "../types";

const StyledIcon = styled.div<{ $width?: string; $height?: string }>`
  display: flex;
  svg,
  img {
    width: ${({ $width }) => $width};
    height: ${({ $height }) => $height};
  }
`;

type IconProps = {
  icon: IconProp;
  width?: string;
  height?: string;
};

const Icon = ({ icon: value, width = "auto", height = "auto" }: IconProps) => (
  <StyledIcon $width={width} $height={height}>
    {typeof value === "string" ? <img src={value} /> : value}
  </StyledIcon>
);

export default Icon;
