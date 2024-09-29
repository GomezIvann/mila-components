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
  title?: string;
};

const Icon = ({ icon, width = "auto", height = "auto", title }: IconProps) => (
  <StyledIcon $width={width} $height={height} title={title} aria-label={title}>
    {typeof icon === "string" ? <img src={icon} /> : icon}
  </StyledIcon>
);

export default Icon;
