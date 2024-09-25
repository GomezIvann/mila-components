import slugify from "slugify";
import styled from "styled-components";
import { color, space, typography } from "../common/core-tokens";
import Heading from "../heading/heading";
import QuickNavigationProps from "./types";
import alias from "../common/alias-tokens";

const StyledQuickNavigation = styled.div`
  border-left: 2px solid ${alias.color.primaryBorder};
  padding: ${space[8]} ${space[16]};
  display: flex;
  flex-direction: column;
  gap: ${space[8]};
`;

const ListFirstColumn = styled.ul`
  margin: 0;
  padding: ${space[4]};
  display: flex;
  flex-direction: column;
  gap: ${space[12]};
  list-style-type: none;
`;

const ListSecondColumn = styled.ul`
  margin: ${space[8]} 0 0 0;
  padding: 0 ${space[12]};
  display: flex;
  flex-direction: column;
  gap: ${space[4]};
  list-style-type: none;
`;

const Link = styled.a`
  max-width: 100%;
  width: fit-content;
  color: ${color.grey[700]};
  font-size: ${typography.size.sm};
  font-family: ${typography.family.sans};
  font-style: ${typography.style.normal};
  font-weight: ${typography.weight.normal};
  line-height: ${typography.lineHeight.snug};
  display: block;
  text-decoration: none;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  border-radius: ${alias.space.borderRadius};

  &:hover {
    color: ${color.blue[300]};
  }
  &:focus {
    outline: 2px solid ${alias.color.focus};
    outline-offset: ${alias.space.focusOffset};
  }
`;

const QuickNavigation = ({ title, links }: QuickNavigationProps) => (
  <StyledQuickNavigation>
    {title && <Heading level={4}>{title}</Heading>}
    <ListFirstColumn>
      {links.map((link, index) => (
        <li key={index}>
          <Link href={`#${slugify(link?.label, { lower: true })}`}>{link?.label}</Link>
          {link.links && (
            <ListSecondColumn>
              {link.links?.map((sublink) => (
                <li key={sublink.label}>
                  <Link
                    href={`#${slugify(link?.label, { lower: true })}-${slugify(sublink?.label, {
                      lower: true,
                    })}`}
                  >
                    {sublink?.label}
                  </Link>
                </li>
              ))}
            </ListSecondColumn>
          )}
        </li>
      ))}
    </ListFirstColumn>
  </StyledQuickNavigation>
);

export default QuickNavigation;
