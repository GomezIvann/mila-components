import { styled } from "styled-components";
import { color, space, typography } from "../../common/core-tokens";
import FooterProps from "./types";
import Icon from "../../common/icon/icon";
import Link from "../../link/link";
import Heading from "../../heading/heading";
import alias from "../../common/alias-tokens";
import Flex from "../../flex/flex";
import Divider from "../../divider/divider";

const StyledFooter = styled.footer`
  border-top: 1px solid ${alias.color.primaryBorder};
  padding: ${space[16]} ${space[24]};
  display: flex;
  flex-direction: column;
  gap: ${space[4]};
  background-color: ${color.grey[50]};
`;

const MainContent = styled.div`
  margin-bottom: ${space[16]};
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: ${space[16]};
`;

const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: ${space[8]};
  color: ${alias.color.text};
`;

const CustomContent = styled.div`
  flex-grow: 1;
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: ${space[8]};
`;

const SocialIconLink = styled.a`
  border-radius: ${alias.space.primaryBorderRadius};
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${alias.color.text};

  &:focus {
    outline: 2px solid ${alias.color.focus};
  }
  &:hover {
    color: ${color.grey[600]};
  }
`;

const Copyright = styled.small`
  color: ${alias.color.text};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.sm};
`;

const LinksList = styled.div`
  display: flex;
  gap: ${space[12]};

  & > a {
    font-size: ${typography.size.sm};
    line-height: ${typography.lineHeight.snug};
  }
`;

const Footer = ({ content, copyright, links, socialIcons, title }: FooterProps) => (
  <StyledFooter>
    <MainContent>
      {title && (
        <TitleContainer>
          {title.icon && <Icon icon={title.icon} height="40px" />}
          {title.text && <Heading level={3}>{title.text}</Heading>}
        </TitleContainer>
      )}
      <CustomContent>{content}</CustomContent>
      {socialIcons && (
        <SocialIconsContainer>
          {socialIcons.map((social, index) => (
            <SocialIconLink key={index} href={social.href} target="_blank">
              <Icon icon={social.icon} width="24px" height="24px" title={social.title} />
            </SocialIconLink>
          ))}
        </SocialIconsContainer>
      )}
    </MainContent>
    <Divider />
    <Flex alignItems="center" justifyContent="space-between" wrap="wrap">
      {copyright && <Copyright>{copyright}</Copyright>}
      {links && (
        <LinksList>
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.label}
            </Link>
          ))}
        </LinksList>
      )}
    </Flex>
  </StyledFooter>
);

export default Footer;
