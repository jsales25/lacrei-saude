"use client";

import Link from "next/link";
import styled from "styled-components";
import BackToTop from "./BackToTop";

const FooterContainer = styled.footer`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.semantic.background.subtle};

  color: ${({ theme }) =>
    theme.colors.semantic.text.body};

  padding: ${({ theme }) => theme.spacing["2xl"]}
    ${({ theme }) => theme.spacing.md};

  border-top: 1px solid
    ${({ theme }) => theme.colors.semantic.border.divider};
`;

const FooterContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
    gap: ${({ theme }) => theme.spacing["2xl"]};
  }
`;

const BrandSection = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const Logo = styled(Link)`
  color: ${({ theme }) => theme.colors.semantic.text.accent};

  font-size: 24px;
  font-weight: 700;
  text-decoration: none;
  width: fit-content;

  &:focus-visible {
    outline: 3px solid ${({ theme }) =>
      theme.colors.semantic.border.focusInfo};
    outline-offset: 4px;
  }
`;

const FooterDescription = styled.p`
  margin: 0;
  max-width: 320px;
  font-size: 14px;
  line-height: 1.5;
`;

const FooterSection = styled.nav`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SectionTitle = styled.h2`
  margin: 0;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.semantic.text.heading};
`;

const FooterLink = styled(Link)`
  width: fit-content;
  color: ${({ theme }) => theme.colors.semantic.text.body};
  font-size: 14px;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) =>
      theme.colors.semantic.border.focusInfo};
    outline-offset: 3px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.md};
`;

const SocialLink = styled.a`
  color: ${({ theme }) => theme.colors.semantic.text.accent};
  font-size: 14px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) =>
      theme.colors.semantic.border.focusInfo};
    outline-offset: 3px;
  }
`;

const FooterBottom = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: ${({ theme }) => theme.spacing["2xl"]} auto 0;
  padding-top: ${({ theme }) => theme.spacing.lg};

  border-top: 1px solid
    ${({ theme }) => theme.colors.semantic.border.divider};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  font-size: 12px;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

const Copyright = styled.p`
  margin: 0;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <FooterContent>
        <BrandSection>
          <Logo href="/" aria-label="Lacrei Saúde - Página inicial">
            Lacrei Saúde
          </Logo>

          <FooterDescription>
            Conectando pessoas a uma saúde mais inclusiva e acolhedora.
          </FooterDescription>
        </BrandSection>

        <FooterSection aria-label="Links institucionais">
          <SectionTitle>Institucional</SectionTitle>
          <FooterLink href="#quem-somos">Quem somos</FooterLink>
          <FooterLink href="#ajuda">Ajuda</FooterLink>
        </FooterSection>

        <FooterSection aria-label="Redes sociais">
          <SectionTitle>Redes sociais</SectionTitle>

          <SocialLinks>
            <SocialLink href="#facebook">Facebook</SocialLink>
            <SocialLink href="#instagram">Instagram</SocialLink>
            <SocialLink href="#linkedin">LinkedIn</SocialLink>
            <SocialLink href="mailto:">E-mail</SocialLink>
          </SocialLinks>
        </FooterSection>

        <BackToTop />
      </FooterContent>

      <FooterBottom>
        <Copyright>
          © {new Date().getFullYear()} Lacrei Saúde.
        </Copyright>

        <Copyright>
          CNPJ: XX.XXX.XXX/0001-XX
        </Copyright>
      </FooterBottom>
    </FooterContainer>
  );
}
