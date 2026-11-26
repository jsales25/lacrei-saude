
"use client";

import Link from "next/link";
import styled from "styled-components";

const HeaderContainer = styled.header`
  width: 100%;
  background-color: ${({ theme }) =>
    theme.colors.semantic.background.default};
`;

const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  min-height: 72px;
  margin: 0 auto;
  padding: 0 ${({ theme }) => theme.spacing.md};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (min-width: 641px) {
    min-height: 88px;
    padding: 0 ${({ theme }) => theme.spacing.lg};
  }
`;

const Logo = styled(Link)`
  color: ${({ theme }) =>
    theme.colors.semantic.text.accent};

  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  white-space: nowrap;

  &:focus-visible {
    outline: 3px solid ${({ theme }) =>
      theme.colors.semantic.border.focusInfo};
    outline-offset: 4px;
    border-radius: 4px;
  }

  @media (min-width: 641px) {
    font-size: 24px;
  }
`;

const Navigation = styled.nav`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.sm};

  @media (min-width: 641px) {
    gap: ${({ theme }) => theme.spacing["2xl"]};
  }
`;

const NavigationLink = styled(Link)`
  display: none;

  color: ${({ theme }) =>
    theme.colors.semantic.text.accent};

  font-size: 16px;
  font-weight: 600;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) =>
      theme.colors.semantic.border.focusInfo};
    outline-offset: 4px;
  }

  @media (min-width: 641px) {
    display: inline-block;
  }
`;

const LoginButton = styled(Link)`
  min-width: 100px;
  min-height: 40px;
  padding: ${({ theme }) => theme.spacing.sm}
    ${({ theme }) => theme.spacing.md};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) =>
    theme.colors.semantic.background.accent};

  color: ${({ theme }) =>
    theme.colors.semantic.text.invert};

  border-radius: ${({ theme }) => theme.borderRadius.md};

  font-size: 14px;
  font-weight: 700;
  text-decoration: none;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18);

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.semantic.background.accentHover};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) =>
      theme.colors.semantic.border.focusInfo};
    outline-offset: 3px;
  }

  @media (min-width: 641px) {
    min-width: 144px;
    min-height: 44px;
    padding: ${({ theme }) => theme.spacing.sm}
      ${({ theme }) => theme.spacing.lg};

    font-size: 16px;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Logo href="/" aria-label="Lacrei Saúde - Página inicial">
          Lacrei Saúde
        </Logo>

        <Navigation aria-label="Navegação principal">
          <NavigationLink href="#quem-somos">
            Quem somos
          </NavigationLink>

          <NavigationLink href="#ajuda">
            Ajuda
          </NavigationLink>

          <LoginButton href="#entrar">
            Entrar
          </LoginButton>
        </Navigation>
      </HeaderContent>
    </HeaderContainer>
  );
}
