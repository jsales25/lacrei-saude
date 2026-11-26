"use client";

import { useState } from "react";
import styled from "styled-components";

import SearchFilters from "../SearchFilters";
import ProfessionalList from "../ProfessionalList";
import { professionals } from "../../data/professionals";

const ContentContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xl};
`;

export default function SearchPageContent() {
  const [searchTerm, setSearchTerm] = useState("");
  const [specialty, setSpecialty] = useState("");
  const [modality, setModality] = useState<
    "" | "online" | "presencial"
  >("");

  const specialties = Array.from(
    new Set(professionals.map((professional) => professional.specialty))
  );

    const filteredProfessionals = professionals.filter((professional) => {
    const matchesName = professional.name
      .toLowerCase()
      .includes(searchTerm.trim().toLowerCase());

    const matchesSpecialty =
      !specialty || professional.specialty === specialty;

    const matchesModality =
      !modality || professional.modality.includes(modality);

    return matchesName && matchesSpecialty && matchesModality;
  });

    return (
    <ContentContainer>
      <SearchFilters
        searchTerm={searchTerm}
        specialty={specialty}
        modality={modality}
        specialties={specialties}
        onSearchTermChange={setSearchTerm}
        onSpecialtyChange={setSpecialty}
        onModalityChange={setModality}
        onClear={() => {
          setSearchTerm("");
          setSpecialty("");
          setModality("");
        }}
      />

      <ProfessionalList professionals={filteredProfessionals} />
    </ContentContainer>
  );
}