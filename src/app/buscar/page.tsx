"use client";

import Header from "../components/Header";
import Footer from "../components/Footer";
import SearchPageContent from "../components/SearchPageContent";
import styled from "styled-components";

const Main = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: ${({ theme }) => theme.spacing.xl}
    ${({ theme }) => theme.spacing.md};

  @media (min-width: 768px) {
    padding: ${({ theme }) => theme.spacing["2xl"]}
      ${({ theme }) => theme.spacing.lg};
  }
`;

export default function SearchPage() {
  return (
    <>
      <Header />

      <Main>
        <SearchPageContent />
      </Main>

      <Footer />
    </>
  );
}
