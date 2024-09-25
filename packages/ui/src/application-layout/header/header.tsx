import { styled } from "styled-components";
import HeaderProps from "./types";
import Heading from "../../heading/heading";
import { color, space, typography } from "../../common/core-tokens";
import alias from "../../common/alias-tokens";
import Icon from "../../common/icon/icon";
import { useState, useEffect } from "react";
import DropdownMenu from "../../dropdown/dropdown";
import { breakpoints } from "../../common/breakpoints";

const StyledHeader = styled.header`
  position: relative;
  box-sizing: border-box;
  height: 64px;
  padding: ${space[12]} ${space[32]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${color.transparent};
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${color.grey[200]};
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${space[32]};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: ${space[4]};
  white-space: nowrap;
`;

const TitleLink = styled.a`
  display: flex;
  align-items: center;
  gap: ${space[8]};
  color: ${color.grey[900]};
  text-decoration: none;
  user-select: none;
  cursor: pointer;

  &:focus {
    outline: 2px solid ${alias.focus};
    outline-offset: ${alias.focusOffset};
  }
`;

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: ${space[16]};
  list-style: none;
`;

const NavigationLink = styled.a<{ $selected?: boolean }>`
  position: relative;
  border-radius: ${space[4]};
  padding: ${space[8]} ${space[12]};
  color: ${color.grey[900]};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  font-weight: ${typography.weight.medium};
  line-height: ${typography.lineHeight.normal};
  text-decoration: none;
  user-select: none;
  cursor: pointer;

  &:hover {
    background-color: ${color.grey[100]};
  }
  &:focus {
    outline: 2px solid ${alias.focus};
    outline-offset: ${alias.focusOffset};
  }
  ${({ $selected }) =>
    $selected &&
    `
      color: ${color.blue[500]};
      &::after {
        content: '';
        position: absolute;
        bottom: -${space[16]};
        left: 0;
        right: 0;
        height: 4px;
        border-radius: ${space[2]};
        background-color: ${color.blue[500]};
    }`}
`;

const Content = styled.div`
  margin-left: ${space[32]};
`;

const Header = ({ content, navigationLinks, onNavigate, responsiveBreakpoint, title }: HeaderProps) => {
  const [isInResponsiveMode, setIsInResponsiveMode] = useState(false);

  useEffect(() => {
    if (responsiveBreakpoint && window) {
      const mediaQuery = window.matchMedia(`(max-width: ${breakpoints[responsiveBreakpoint]})`);
      const handleMediaQueryChange = (event: MediaQueryListEvent) => setIsInResponsiveMode(event.matches);
      mediaQuery.addEventListener("change", handleMediaQueryChange);
      setIsInResponsiveMode(mediaQuery.matches);
      return () => mediaQuery.removeEventListener("change", handleMediaQueryChange);
    }
  }, [responsiveBreakpoint]);

  return (
    <StyledHeader>
      <Navigation>
        {title &&
          (title.href == null ? (
            <Title>
              {title?.icon && <Icon icon={title.icon} height="40px" />}
              {title?.label && <Heading level={3}>{title.label}</Heading>}
            </Title>
          ) : (
            <TitleLink onClick={() => title.href && onNavigate?.(title.href)}>
              {title?.icon && <Icon icon={title.icon} height="40px" />}
              {title?.label && <Heading level={3}>{title.label}</Heading>}
            </TitleLink>
          ))}
        {navigationLinks &&
          (isInResponsiveMode ? (
            <DropdownMenu
              items={navigationLinks?.map(({ label, href }) => ({
                label,
                value: href,
              }))}
              label="Menu"
              triggerType="action"
              onItemClick={(value) => onNavigate?.(value)}
            />
          ) : (
            <NavigationList>
              {navigationLinks?.map(({ label, href }, index) => (
                <li key={index}>
                  <NavigationLink
                    $selected={window && window.location.pathname.startsWith(href)}
                    onClick={() => onNavigate?.(href)}
                    tabIndex={0}
                  >
                    {label}
                  </NavigationLink>
                </li>
              ))}
            </NavigationList>
          ))}
      </Navigation>
      {content && <Content>{content}</Content>}
    </StyledHeader>
  );
};

export default Header;
