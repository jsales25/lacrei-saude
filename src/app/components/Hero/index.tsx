
"use client";

import Link from "next/link";
import styled from "styled-components";

const HeroSection = styled.section`
  width: 100%;
  min-height: 0;
  padding: ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.md};

  display: flex;
  align-items: flex-start;

  background-color: ${({ theme }) =>
    theme.colors.semantic.background.default};

  background-image: url("/images/estetoscopio-bandeira-mobile.png");
  background-repeat: no-repeat;
  background-position: center bottom;
  background-size: 100% auto;

  @media (min-width: 768px) {
    min-height: 450px;
    padding: 64px 24px;

    align-items: center;

    background-image:
      linear-gradient(
        90deg,
        rgba(255, 255, 255, 0.96) 0%,
        rgba(255, 255, 255, 0.82) 34%,
        rgba(255, 255, 255, 0) 70%
      ),
      url("/images/estetoscopio-bandeira-desktop.png");

    background-position: center;
    background-size: cover;
  }
`;

const HeroContent = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: ${({ theme }) => theme.spacing.lg};

  @media (min-width: 768px) {
    gap: ${({ theme }) => theme.spacing.xl};
  }
`;

const HeroText = styled.div`
  width: 100%;
  max-width: 440px;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
`;

const HeroTitle = styled.h1`
  margin: 0;

  color: ${({ theme }) =>
    theme.colors.semantic.text.accent};

  font-size: 32px;
  font-weight: 700;
  line-height: 1.2;

  @media (min-width: 768px) {
    font-size: 40px;
  }
`;

const HeroDescription = styled.p`
  margin: 0;

  color: ${({ theme }) =>
    theme.colors.semantic.text.body};

  font-size: 16px;
  line-height: 1.5;

  @media (min-width: 768px) {
    font-size: 18px;
  }
`;

const Highlight = styled.strong`
  font-weight: 700;
`;

const HeroActions = styled.div`
  width: 100%;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: 480px) {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

const HeroButton = styled(Link)`
  min-height: 48px;
  width: 100%;
  max-width: 240px;
  padding: ${({ theme }) => theme.spacing.md}
    ${({ theme }) => theme.spacing.lg};

  display: inline-flex;
  align-items: center;
  justify-content: center;

  border: 2px solid
    ${({ theme }) => theme.colors.semantic.background.accent};
  border-radius: ${({ theme }) => theme.borderRadius.md};

  background-color: ${({ theme }) =>
    theme.colors.semantic.background.accent};

  color: ${({ theme }) =>
    theme.colors.semantic.text.invert};

  font-size: 16px;
  font-weight: 700;
  text-align: center;
  text-decoration: none;

  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.18);

  transition:
    background-color 0.2s ease,
    border-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.semantic.background.accentHover};

    border-color: ${({ theme }) =>
      theme.colors.semantic.background.accentHover};
  }

  &:focus-visible {
    outline: 3px solid
      ${({ theme }) => theme.colors.semantic.border.focusInfo};
    outline-offset: 3px;
  }

  @media (min-width: 480px) {
    width: auto;
  }
`;

export default function Hero() {
  return (
    <HeroSection aria-labelledby="hero-title">
      <HeroContent>
        <HeroText>
          <HeroTitle id="hero-title">
            Olá, você está na Lacrei Saúde!
          </HeroTitle>

          <HeroDescription>
            Conectamos pessoas{" "}
            <Highlight>LGBTQIAPN+</Highlight> com profissionais
            de saúde qualificados, proporcionando experiências
            de cuidado seguras e inclusivas.
          </HeroDescription>
        </HeroText>

        <HeroActions>
          <HeroButton href="/buscar">
            Para pacientes
          </HeroButton>

          <HeroButton href="#profissionais">
            Para profissionais
          </HeroButton>
        </HeroActions>
      </HeroContent>
    </HeroSection>
  );
}
