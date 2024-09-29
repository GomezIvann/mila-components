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
  display: flex;
  flex-direction: column;
  gap: ${space[4]};
  padding: ${space[16]} ${space[24]};
  background-color: ${color.grey[100]};
  border-top: 1px solid ${alias.color.primaryBorder};
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${space[16]};
  margin-bottom: ${space[16]};
`;

const Title = styled.div`
  display: flex;
  align-items: center;
  gap: ${space[4]};
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
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: ${alias.space.primaryBorderRadius};
  color: ${alias.color.text};

  &:focus {
    outline: 2px solid ${alias.color.focus};
  }
  &:hover {
    color: ${color.grey[600]};
  }
`;

const Copyright = styled.small`
  font-family: ${typography.family.sans};
  font-size: ${typography.size.sm};
  color: ${alias.color.text};
`;

const LinksList = styled.div`
  display: flex;
  gap: ${space[12]};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.sm};
  font-weight: ${typography.weight.medium};
  line-height: ${typography.lineHeight.normal};
`;

const Footer = ({ content, copyright = "© 2024 GomezIvann", links, socialIcons, title }: FooterProps) => (
  <StyledFooter>
    <MainContent>
      {title && (
        <Title>
          {title.icon && <Icon icon={title.icon} height="40px" />}
          {title.label && <Heading level={3}>{title.label}</Heading>}
        </Title>
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
    <Flex alignItems="center" justifyContent="space-between">
      {copyright && <Copyright>{copyright}</Copyright>}
      {links && (
        <LinksList>
          {links.map((link, index) => (
            <Link key={index} href={link.href} inheritStyles>
              {link.label}
            </Link>
          ))}
        </LinksList>
      )}
    </Flex>
  </StyledFooter>
);

export default Footer;
