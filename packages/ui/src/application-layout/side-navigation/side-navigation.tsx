import { createContext, useCallback, useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import Divider from "../../divider/divider";
import SideNavigationProps, { GroupItemType, SectionType, SideNavigationWrapperProps, SingleItemType } from "./types";
import { color, space } from "../../common/core-tokens";
import Heading from "../../heading/heading";
import Icon from "../../common/icon/icon";
import SingleItem from "./single-item";
import GroupItem from "./group-item";
import alias from "../../common/alias-tokens";
import ActionButton from "../../action-button/action-button";
import { breakpoints } from "../../common/breakpoints";
import icons from "../../common/icons";

const StyledSideNavigation = styled.nav<{ $isInResponsiveMode: boolean }>`
  ${({ $isInResponsiveMode }) => $isInResponsiveMode && "position: absolute;"}
  box-sizing: border-box;
  margin: 0;
  border-right: 1px solid ${alias.color.primaryBorder};
  padding: ${({ $isInResponsiveMode }) =>
    $isInResponsiveMode ? `${space[72]} ${space[16]}` : `${space[48]} ${space[16]}`};
  height: 100%;
  width: 280px;
  display: flex;
  flex-direction: column;
  gap: ${space[8]};
  background-color: ${color.white};
  overflow-y: auto;
`;

const Title = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${space[4]};
  padding-bottom: ${space[20]};
  white-space: nowrap;
`;

const Section = styled.section`
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${space[8]};

  > hr {
    margin: ${space[8]} 0;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${space[4]};
`;

const ResponsiveTriggerContainer = styled.div`
  position: absolute;
  margin: ${space[8]} 0 0 ${space[8]};
  z-index: 2147483647;
`;

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: ${color.black};
  opacity: 0.5;
`;

const isSectionType = (item?: SectionType | SingleItemType | GroupItemType): item is SectionType =>
  item != null && "items" in item && !("label" in item);

const SideNavigationItem = ({ item }: { item: SingleItemType | GroupItemType }) => (
  <li>{"items" in item ? <GroupItem item={item} /> : <SingleItem item={item} />}</li>
);

const SideNavigationWrapper = ({ condition, children, isOpen, setIsOpen }: SideNavigationWrapperProps) =>
  condition ? (
    <>
      <ResponsiveTriggerContainer>
        <ActionButton
          variant="bordered"
          icon={isOpen ? icons.menuOpen : icons.menu}
          onClick={() => setIsOpen((isOpen) => !isOpen)}
        />
      </ResponsiveTriggerContainer>
      {isOpen && children}
    </>
  ) : (
    children
  );

export const SideNavigationContext = createContext<SideNavigationProps["onNavigate"]>(() => {});

const SideNavigation = ({ items, onNavigate, responsiveBreakpoint, title }: SideNavigationProps) => {
  const [isOpen, setIsOpen] = useState(false); // For responsive mode
  const [isInResponsiveMode, setIsInResponsiveMode] = useState(false);

  const handleNavigate = useCallback(
    (href: string) => {
      onNavigate(href);
      isInResponsiveMode && setIsOpen(false);
    },
    [onNavigate, isInResponsiveMode]
  );

  useEffect(() => {
    if (responsiveBreakpoint) {
      const handleResize = () =>
        window.matchMedia(`(max-width: ${breakpoints[responsiveBreakpoint]})`).matches
          ? setIsInResponsiveMode(true)
          : setIsInResponsiveMode(false);
      setIsInResponsiveMode(window.matchMedia(`(max-width: ${breakpoints[responsiveBreakpoint]})`).matches);
      handleResize();
      window.addEventListener("resize", handleResize);
      return () => window.removeEventListener("resize", handleResize);
    }
  }, [responsiveBreakpoint]);

  return (
    <SideNavigationWrapper condition={isInResponsiveMode} isOpen={isOpen} setIsOpen={setIsOpen}>
      {isInResponsiveMode && isOpen && <Overlay onClick={() => setIsOpen(false)} />}
      <StyledSideNavigation
        aria-label={`side-navigation${title?.label ? `-${title.label}` : ""}`}
        $isInResponsiveMode={isInResponsiveMode}
      >
        {title && (
          <Title>
            {title?.icon && <Icon icon={title.icon} height="40px" />}
            {title?.label && <Heading level={2}>{title.label}</Heading>}
          </Title>
        )}
        <SideNavigationContext.Provider value={handleNavigate}>
          {isSectionType(items[0]) ? (
            (items as SectionType[]).map((section, index) => (
              <Section aria-label={section?.title} key={`${section.title}-${index}`}>
                {section.title && <Heading level={4}>{section.title}</Heading>}
                <List>
                  {section.items.map((item, index) => (
                    <SideNavigationItem item={item} key={`${item.label}-${index}`} />
                  ))}
                </List>
                {index !== items.length - 1 && <Divider />}
              </Section>
            ))
          ) : (
            <List>
              {(items as (GroupItemType | SingleItemType)[]).map((item, index) => (
                <SideNavigationItem item={item} key={`${item.label}-${index}`} />
              ))}
            </List>
          )}
        </SideNavigationContext.Provider>
      </StyledSideNavigation>
    </SideNavigationWrapper>
  );
};

export default SideNavigation;
