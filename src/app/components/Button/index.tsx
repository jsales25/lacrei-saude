
"use client";

import styled from "styled-components";
import type { ButtonHTMLAttributes } from "react";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {}

const StyledButton = styled.button`
  background-color: ${({ theme }) =>
    theme.colors.semantic.background.accent};

  color: ${({ theme }) =>
    theme.colors.semantic.text.invert};

  padding: ${({ theme }) => theme.spacing.md}
    ${({ theme }) => theme.spacing.lg};

  border: none;

  border-radius: ${({ theme }) =>
    theme.borderRadius.md};

  font-weight: 700;

  cursor: pointer;

  transition:
    background-color 0.2s ease,
    opacity 0.2s ease;

  &:hover:not(:disabled) {
    background-color: ${({ theme }) =>
      theme.colors.semantic.background.accentHover};
  }

  &:active:not(:disabled) {
    background-color: ${({ theme }) =>
      theme.colors.semantic.background.accentPressed};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) =>
      theme.colors.semantic.border.focusInfo};

    outline-offset: 3px;
  }

  &:disabled {
    background-color: ${({ theme }) =>
      theme.colors.semantic.background.disabled};

    color: ${({ theme }) =>
      theme.colors.semantic.text.disabled};

    cursor: not-allowed;
  }
`;

export default function Button({
  children,
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <StyledButton type={type} {...props}>
      {children}
    </StyledButton>
  );
}
