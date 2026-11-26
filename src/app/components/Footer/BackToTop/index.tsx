
"use client";

import styled from "styled-components";

const BackToTopButton = styled.button`
  border: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.semantic.text.accent};

  padding: ${({ theme }) => theme.spacing.sm};
  font-size: 14px;
  font-weight: 600;

  cursor: pointer;
  text-decoration: underline;
  text-underline-offset: 4px;

  &:focus-visible {
    outline: 3px solid ${({ theme }) =>
      theme.colors.semantic.border.focusInfo};
    outline-offset: 3px;
    border-radius: 4px;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.semantic.text.hover};
  }
`;

export default function BackToTop() {
  function handleBackToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  return (
    <BackToTopButton
      type="button"
      onClick={handleBackToTop}
      aria-label="Voltar ao topo da página"
    >
      Voltar ao topo ↑
    </BackToTopButton>
  );
}
