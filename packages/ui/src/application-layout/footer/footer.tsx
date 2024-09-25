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
  padding: ${space[12]} ${space[16]};
  background-color: ${color.grey[100]};
  border-top: 1px solid ${color.grey[200]};
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  gap: ${space[16]};
  margin-bottom: ${space[24]};
`;

const TitleContainer = styled.a`
  display: flex;
  align-items: center;
  gap: ${space[4]};
  text-decoration: none;
  color: ${color.grey[900]};
  border-radius: ${space[4]};

  &:focus {
    outline: 2px solid ${alias.focus};
    outline-offset: ${alias.focusOffset};
  }
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
  border-radius: ${space[4]};
  color: ${color.grey[900]};

  &:focus {
    outline: 2px solid ${alias.focus};
  }
`;

const Copyright = styled.small`
  font-family: ${typography.family.sans};
  font-size: ${typography.size.sm};
  color: ${color.grey[900]};
`;

const Footer = ({ content, copyright = "© 2024 Mila Components", links, socialIcons, title }: FooterProps) => (
  <StyledFooter>
    <MainContent>
      {title && (
        <TitleContainer href={title.href}>
          {title.icon && <Icon icon={title.icon} width="24px" height="24px" />}
          {title.label && <Heading level={3}>{title.label}</Heading>}
        </TitleContainer>
      )}
      <CustomContent>{content}</CustomContent>
      {socialIcons && (
        <SocialIconsContainer>
          {socialIcons.map((social, index) => (
            <SocialIconLink key={index} href={social.href}>
              <Icon icon={social.icon} width="24px" height="24px" />
            </SocialIconLink>
          ))}
        </SocialIconsContainer>
      )}
    </MainContent>
    <Divider />
    <Flex alignItems="center" justifyContent="space-between">
      {copyright && <Copyright>{copyright}</Copyright>}
      {links && (
        <Flex gap={8}>
          {links.map((link, index) => (
            <Link key={index} href={link.href}>
              {link.label}
            </Link>
          ))}
        </Flex>
      )}
    </Flex>
  </StyledFooter>
);

export default Footer;
