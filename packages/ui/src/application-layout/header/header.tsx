import { styled } from "styled-components";
import HeaderProps from "./types";
import Heading from "../../heading/heading";
import Flex from "../../flex/flex";
import { color, space, typography } from "../../common/core-tokens";
import alias from "../../common/alias-tokens";
import Icon from "../../common/icon/icon";

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

const TitleIcon = styled.span`
  img,
  svg {
    width: ${space[40]};
    height: ${space[40]};
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
  const titleContent = (
    <>
      {title?.icon && (
        <TitleIcon>
          <Icon icon={title.icon} height="40px" />
        </TitleIcon>
      )}
      {title?.label && <Heading level={3}>{title.label}</Heading>}
    </>
  );

  return (
    <StyledHeader>
      <Navigation>
        {title &&
          (title.href == null ? (
            <Flex alignItems="center" gap={4}>
              {titleContent}
            </Flex>
          ) : (
            <TitleLink onClick={() => title.href && onNavigate?.(title.href)}>{titleContent}</TitleLink>
          ))}
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
      </Navigation>
      {content && <Content>{content}</Content>}
    </StyledHeader>
  );
};

export default Header;
