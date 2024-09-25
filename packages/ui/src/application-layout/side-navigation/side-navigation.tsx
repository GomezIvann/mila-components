import { createContext } from "react";
import styled from "styled-components";
import Divider from "../../divider/divider";
import SideNavigationProps, { GroupItemType, ItemType } from "./types";
import { color, space } from "../../common/core-tokens";
import Heading from "../../heading/heading";
import Icon from "../../common/icon/icon";
import SingleItem from "./single-item";
import GroupItem from "./group-item";
import alias from "../../common/alias-tokens";

const StyledSideNavigation = styled.nav`
  box-sizing: border-box;
  margin: 0;
  border-right: 1px solid ${alias.color.primaryBorder};
  padding: ${space[16]} ${space[8]};
  display: flex;
  flex-direction: column;
  gap: ${space[8]};
  height: 100%;
  background-color: ${color.white};

  overflow-y: auto;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${color.grey[700]};
    border-radius: 0.25rem;
  }
  &::-webkit-scrollbar-track {
    background-color: ${color.grey[300]};
    border-radius: 0.25rem;
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: ${space[4]};
  padding: ${space[16]} 0;
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

const SectionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${space[4]};
`;

export const SideNavigationContext = createContext<{
  onNavigate: SideNavigationProps["onNavigate"];
}>({
  onNavigate: () => {},
});

const SideNavigationItem = ({ item }: { item: ItemType | GroupItemType }) =>
  "items" in item ? <GroupItem item={item} /> : <SingleItem item={item} />;

const SideNavigation = ({ items, onNavigate, responsiveBreakpoint, title }: SideNavigationProps) => {
  return (
    <StyledSideNavigation>
      {title && (
        <Title>
          {title?.icon && <Icon icon={title.icon} height="40px" />}
          {title?.label && <Heading level={2}>{title.label}</Heading>}
        </Title>
      )}
      <SideNavigationContext.Provider value={{ onNavigate }}>
        {items.map((item, index) =>
          "items" in item && !("label" in item) ? (
            <Section role="group" aria-labelledby={item.title} key={`${item.title}-${index}`}>
              {item.title && <Heading level={4}>{item.title}</Heading>}
              <SectionList>
                {item.items.map((item, index) => (
                  <SideNavigationItem item={item} key={`${item.label}-${index}`} />
                ))}
              </SectionList>
              {index !== items.length - 1 && <Divider />}
            </Section>
          ) : (
            <SideNavigationItem item={item} key={`${item.label}-${index}`} />
          )
        )}
      </SideNavigationContext.Provider>
    </StyledSideNavigation>
  );
};

export default SideNavigation;
