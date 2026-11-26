"use client";

import styled from "styled-components";

interface SearchFiltersProps {
  searchTerm: string;
  specialty: string;
  modality: "" | "online" | "presencial";
  specialties: string[];

  onSearchTermChange: (value: string) => void;
  onSpecialtyChange: (value: string) => void;
  onModalityChange: (
    value: "" | "online" | "presencial"
  ) => void;
  onClear: () => void;
}

const FiltersContainer = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};
  padding: ${({ theme }) => theme.spacing.lg};
  background-color: ${({ theme }) =>
    theme.colors.semantic.background.subtle};
  border-radius: ${({ theme }) => theme.borderRadius.lg};
`;

const FilterGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const FilterLabel = styled.label`
  color: ${({ theme }) => theme.colors.semantic.text.heading};
  font-size: 14px;
  font-weight: 600;
`;

const FilterInput = styled.input`
  width: 100%;
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.sm}
    ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.semantic.border.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) =>
    theme.colors.semantic.background.default};
  color: ${({ theme }) => theme.colors.semantic.text.body};

  &:focus-visible {
    outline: 3px solid ${({ theme }) =>
      theme.colors.semantic.border.focusInfo};
    outline-offset: 2px;
  }
`;

const FilterSelect = styled.select`
  width: 100%;
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.sm}
    ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) => theme.colors.semantic.border.divider};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: ${({ theme }) =>
    theme.colors.semantic.background.default};
  color: ${({ theme }) => theme.colors.semantic.text.body};

  &:focus-visible {
    outline: 3px solid ${({ theme }) =>
      theme.colors.semantic.border.focusInfo};
    outline-offset: 2px;
  }
`;

const ClearButton = styled.button`
  min-height: 44px;
  padding: ${({ theme }) => theme.spacing.sm}
    ${({ theme }) => theme.spacing.md};
  border: 1px solid ${({ theme }) =>
    theme.colors.semantic.background.accent};
  border-radius: ${({ theme }) => theme.borderRadius.md};
  background-color: transparent;
  color: ${({ theme }) => theme.colors.semantic.text.accent};
  font-weight: 600;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.semantic.background.subtle};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) =>
      theme.colors.semantic.border.focusInfo};
    outline-offset: 2px;
  }
`;

export default function SearchFilters({
  searchTerm,
  specialty,
  modality,
  specialties,
  onSearchTermChange,
  onSpecialtyChange,
  onModalityChange,
  onClear,
}: SearchFiltersProps) {
  return (
    <FiltersContainer aria-label="Filtros de busca">
      <FilterGroup>
        <FilterLabel htmlFor="professional-search">
          Buscar profissional
        </FilterLabel>

        <FilterInput
          id="professional-search"
          type="search"
          placeholder="Digite o nome do profissional"
          value={searchTerm}
          onChange={(event) =>
            onSearchTermChange(event.target.value)
          }
        />
      </FilterGroup>

      <FilterGroup>
        <FilterLabel htmlFor="specialty-filter">
          Especialidade
        </FilterLabel>

        <FilterSelect
          id="specialty-filter"
          value={specialty}
          onChange={(event) =>
            onSpecialtyChange(event.target.value)
          }
        >
          <option value="">Todas as especialidades</option>

          {specialties.map((item) => (
            <option key={item} value={item}>
              {item}
            </option>
          ))}
        </FilterSelect>
      </FilterGroup>

      <FilterGroup>
        <FilterLabel htmlFor="modality-filter">
          Modalidade de atendimento
        </FilterLabel>

        <FilterSelect
          id="modality-filter"
          value={modality}
          onChange={(event) =>
            onModalityChange(
              event.target.value as "" | "online" | "presencial"
            )
          }
        >
          <option value="">Todas as modalidades</option>
          <option value="online">Online</option>
          <option value="presencial">Presencial</option>
        </FilterSelect>
      </FilterGroup>

      <ClearButton type="button" onClick={onClear}>
        Limpar filtros
      </ClearButton>
    </FiltersContainer>
  );
}