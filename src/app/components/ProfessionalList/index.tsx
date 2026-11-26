
"use client";

import ProfessionalCard from "../ProfessionalCard";
import styled from "styled-components";
import type { Professional } from "../../data/professionals";

interface ProfessionalListProps {
  professionals: Professional[];
}

const ListContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};
`;

const ListTitle = styled.h1`
  margin: 0;

  color: ${({ theme }) =>
    theme.colors.semantic.text.heading};

  font-size: 24px;
  font-weight: 700;
`;

const ResultsCount = styled.p`
  margin: 0;

  color: ${({ theme }) =>
    theme.colors.semantic.text.body};

  font-size: 14px;
`;

export default function ProfessionalList({
  professionals,
}: ProfessionalListProps) {
  return (
    <ListContainer aria-labelledby="results-title">
      <div>
        <ListTitle id="results-title">
          Profissionais disponíveis
        </ListTitle>

        <ResultsCount>
          {professionals.length} profissionais encontrados
        </ResultsCount>
      </div>

      {professionals.map((professional) => (
        <ProfessionalCard
          key={professional.id}
          name={professional.name}
          specialty={professional.specialty}
          registration={professional.registration}
          initials={professional.initials}
          inclusions={professional.inclusions}
          services={professional.services}
          description={professional.description}
          onSchedule={() =>
            alert(`Você selecionou: ${professional.name}`)
          }
        />
      ))}
    </ListContainer>
  );
}
