import { styled } from "styled-components";
import HeaderProps from "./types";
import Heading from "../../heading/heading";
import { color, space } from "../../common/core-tokens";
import alias from "../../common/alias-tokens";
import Icon from "../../common/icon/icon";
import { useState, useEffect } from "react";
import DropdownMenu from "../../dropdown-menu/dropdown-menu";
import { breakpoints } from "../../common/breakpoints";
import icons from "../../common/icons";
import { StyledActionButton } from "../../action-button/action-button";

const StyledHeader = styled.header`
  position: relative;
  box-sizing: border-box;
  height: 64px;
  padding: ${space[12]} ${space[32]};
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${space[32]};
  background-color: ${color.transparent};
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background-color: ${alias.color.primaryBorder};
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
  border-radius: ${alias.space.borderRadius};
  display: flex;
  align-items: center;
  gap: ${space[8]};
  color: ${alias.color.text};
  text-decoration: none;
  cursor: pointer;

  &:focus {
    outline: 2px solid ${alias.color.focus};
    outline-offset: ${alias.space.focusOffset};
  }
`;

const NavigationList = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  gap: ${space[16]};
  list-style: none;
`;

const NavigationListItem = styled.li<{ $selected?: boolean }>`
  position: relative;

  ${({ $selected }) =>
    $selected &&
    `&::after {
      content: '';
      position: absolute;
      bottom: -${space[12]};
      left: 0;
      right: 0;
      height: 4px;
      border-radius: ${space[2]};
      background-color: ${color.blue[300]};
    }`}
`;

const Content = styled.div`
  margin-left: ${space[32]};
`;

const Header = ({ content, links, onNavigate, responsiveBreakpoint, title }: HeaderProps) => {
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
      <Navigation aria-label={`header-navigation${title?.label ? `-${title.label}` : ""}`}>
        {title &&
          (title.href == null ? (
            <Title>
              {title?.icon && <Icon icon={title.icon} height="40px" />}
              {title?.label && <Heading level={3}>{title.label}</Heading>}
            </Title>
          ) : (
            <TitleLink onClick={() => title.href && onNavigate?.(title.href)} tabIndex={0}>
              {title?.icon && <Icon icon={title.icon} height="40px" />}
              {title?.label && <Heading level={3}>{title.label}</Heading>}
            </TitleLink>
          ))}
        {links &&
          (isInResponsiveMode ? (
            <DropdownMenu
              items={links?.map(({ href, label }) => ({
                label,
                value: href,
              }))}
              label="Menu"
              triggerType="action"
              onItemClick={(value) => {
                const external = links?.find(({ href }) => href === value)?.external;
                external ? window.open(value, "_blank") : onNavigate?.(value);
              }}
            />
          ) : (
            <NavigationList>
              {links?.map(({ external, href, label, selected }, index) => (
                <NavigationListItem key={index} $selected={selected}>
                  <StyledActionButton
                    as="a"
                    aria-selected={selected}
                    href={external ? href : undefined}
                    onClick={external ? undefined : () => onNavigate?.(href)}
                    tabIndex={0}
                    target={external ? "_blank" : undefined}
                    $hasIcon={external ?? false}
                    $hasLabel={Boolean(label)}
                    $iconPosition="right"
                  >
                    {external && <Icon icon={icons.externalLink} height="24px" width="24px" />}
                    {label}
                  </StyledActionButton>
                </NavigationListItem>
              ))}
            </NavigationList>
          ))}
      </Navigation>
      {content && <Content>{content}</Content>}
    </StyledHeader>
  );
};

export default Header;
