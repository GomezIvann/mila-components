import { styled } from "styled-components";
import { color, space, typography } from "../../common/core-tokens";
import FooterProps from "./types";
import Icon from "../../common/icon/icon";
import Link from "../../link/link";
import Heading from "../../heading/heading";

const StyledFooter = styled.footer<{ backgroundColor?: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${space[8]};
  padding: ${space[12]} ${space[4]};
  background-color: ${({ backgroundColor }) => backgroundColor ?? color.grey[100]};
  color: ${color.grey[900]};
  font-family: ${typography.family.sans};
  font-size: ${typography.size.md};
  border-top: 1px solid ${color.grey[300]};
`;

const TitleContainer = styled.a`
  display: flex;
  align-items: center;
  gap: ${space[4]};
  text-decoration: none;
  color: ${color.grey[900]};
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: ${space[8]};
`;

const SocialIconsContainer = styled.div`
  display: flex;
  gap: ${space[4]};
`;

const Copyright = styled.small`
  color: ${color.grey[700]};
  font-size: ${typography.size.sm};
  font-weight: ${typography.weight.medium};
`;

const Footer = ({ title, links, copyright, socialIcons, backgroundColor }: FooterProps) => (
  <StyledFooter backgroundColor={backgroundColor}>
    {title && (
      <TitleContainer href={title.href}>
        {title.icon && <Icon icon={title.icon} width="24px" height="24px" />}
        {title.label && <Heading level={3}>{title.label}</Heading>}
      </TitleContainer>
    )}
    {links && (
      <FooterLinks>
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </FooterLinks>
    )}
    {socialIcons && (
      <SocialIconsContainer>
        {socialIcons.map((social) => (
          <a key={social.href} href={social.href}>
            <Icon icon={social.icon} width="24px" height="24px" />
          </a>
        ))}
      </SocialIconsContainer>
    )}
    {copyright && <Copyright>{copyright}</Copyright>}
  </StyledFooter>
);

export default Footer;
