import { Fragment } from "react";
import styled from "styled-components";
import Divider from "../../divider/divider";
import ContextualMenuPropsType, { GroupItemType, ItemType } from "./types";
import { color, space } from "../../common/core-tokens";
import Heading from "../../heading/heading";
import Icon from "../../common/icon/icon";
import SingleItem from "./single-item";
import GroupItem from "./group-item";

const StyledSideNavigation = styled.nav`
  box-sizing: border-box;
  margin: 0;
  border: 1px solid ${color.grey[200]};
  border-radius: 0.25rem;
  padding: ${space[16]} ${space[8]};
  display: grid;
  gap: ${space[4]};
  min-width: 248px;
  max-height: 100%;
  background-color: ${color.white};

  overflow-y: auto;
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
  align-items: center;
  gap: ${space[4]};
  white-space: nowrap;
`;

const SectionList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: ${space[4]};
`;

const SideNavigation = ({ items, onNavigate, responsiveBreakpoint, title }: ContextualMenuPropsType) => {
  return (
    <StyledSideNavigation>
      {title && (
        <Title>
          {title?.icon && <Icon icon={title.icon} height="40px" />}
          {title?.label && <Heading level={3}>{title.label}</Heading>}
        </Title>
      )}
      <SectionList>
        {items.map((item, index) => {
          if ("items" in item && !("label" in item))
            return (
              <li role="group" key={index}>
                {item.title && <Heading level={4}>{item.title}</Heading>}
                <ul>
                  {item.items.map((item) =>
                    "items" in item ? (
                      <li key={item.label}>
                        <GroupItem item={item} onNavigate={onNavigate} />
                      </li>
                    ) : (
                      <li key={item.label}>
                        <SingleItem item={item} onNavigate={onNavigate} />
                      </li>
                    )
                  )}
                </ul>
                <Divider />
              </li>
            );
          else if ("items" in item && "label" in item)
            return (
              <li key={item.label}>
                <GroupItem item={item} onNavigate={onNavigate} />
              </li>
            );
          else
            return (
              <li key={item.label}>
                <SingleItem item={item} onNavigate={onNavigate} />
              </li>
            );
        })}
      </SectionList>
    </StyledSideNavigation>
  );
};

export default SideNavigation;
