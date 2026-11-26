
"use client";

import Image from "next/image";
import styled from "styled-components";

interface ProfessionalCardProps {
  name: string;
  specialty: string;
  registration: string;
  photo?: string;
  initials: string;
  inclusions: string[];
  services: string[];
  description: string;
  onSchedule: () => void;
}

const Card = styled.article`
  width: 100%;
  padding: ${({ theme }) => theme.spacing.lg};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.lg};

  background-color: ${({ theme }) =>
    theme.colors.semantic.background.default};

  border: 1px solid
    ${({ theme }) => theme.colors.semantic.border.divider};

  border-radius: ${({ theme }) => theme.borderRadius.lg};

  @media (min-width: 640px) {
    padding: ${({ theme }) => theme.spacing.xl};
  }
`;

const ProfessionalInfo = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.spacing.md};
`;

const PhotoWrapper = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;

  display: flex;
  align-items: center;
  justify-content: center;

  overflow: hidden;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    theme.colors.semantic.background.success};

  color: ${({ theme }) =>
    theme.colors.semantic.text.accent};

  font-size: 24px;
  font-weight: 700;

  @media (min-width: 640px) {
    width: 96px;
    height: 96px;
  }
`;

const ProfessionalPhoto = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const ProfessionalDetails = styled.div`
  min-width: 0;

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};
`;

const ProfessionalName = styled.h2`
  margin: 0;

  color: ${({ theme }) =>
    theme.colors.semantic.text.heading};

  font-size: 18px;
  font-weight: 700;
  line-height: 1.3;
`;

const ProfessionalSpecialty = styled.p`
  margin: 0;

  color: ${({ theme }) =>
    theme.colors.semantic.text.body};

  font-size: 14px;
  line-height: 1.5;
`;

const Registration = styled.p`
  margin: 0;

  color: ${({ theme }) =>
    theme.colors.semantic.text.body};

  font-size: 12px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.sm};
`;

const SectionTitle = styled.h3`
  margin: 0;

  color: ${({ theme }) =>
    theme.colors.semantic.text.heading};

  font-size: 14px;
  font-weight: 700;
`;

const TagList = styled.ul`
  margin: 0;
  padding: 0;

  display: flex;
  flex-wrap: wrap;
  gap: ${({ theme }) => theme.spacing.sm};

  list-style: none;
`;

const Tag = styled.li`
  padding: ${({ theme }) => theme.spacing.xs}
    ${({ theme }) => theme.spacing.sm};

  border-radius: ${({ theme }) => theme.borderRadius.full};

  background-color: ${({ theme }) =>
    theme.colors.semantic.background.success};

  color: ${({ theme }) =>
    theme.colors.semantic.text.accent};

  font-size: 12px;
  font-weight: 600;
`;

const ServiceList = styled.ul`
  margin: 0;
  padding-left: ${({ theme }) => theme.spacing.lg};

  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.xs};

  color: ${({ theme }) =>
    theme.colors.semantic.text.body};

  font-size: 14px;
`;

const CardActions = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.spacing.md};

  @media (min-width: 480px) {
    flex-direction: row;
    align-items: center;
  }
`;

const ScheduleButton = styled.button`
  width: 100%;
  min-height: 48px;
  padding: ${({ theme }) => theme.spacing.md};

  border: none;
  border-radius: ${({ theme }) => theme.borderRadius.md};

  background-color: ${({ theme }) =>
    theme.colors.semantic.background.accent};

  color: ${({ theme }) =>
    theme.colors.semantic.text.invert};

  font-size: 16px;
  font-weight: 700;

  cursor: pointer;

  transition: background-color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) =>
      theme.colors.semantic.background.accentHover};
  }

  &:focus-visible {
    outline: 3px solid
      ${({ theme }) => theme.colors.semantic.border.focusInfo};
    outline-offset: 3px;
  }

  @media (min-width: 480px) {
    width: auto;
    min-width: 200px;
  }
`;

const MoreInfo = styled.details`
  border-top: 1px solid
    ${({ theme }) => theme.colors.semantic.border.divider};

  padding-top: ${({ theme }) => theme.spacing.md};

  color: ${({ theme }) =>
    theme.colors.semantic.text.body};

  font-size: 14px;

  summary {
    width: fit-content;
    color: ${({ theme }) =>
      theme.colors.semantic.text.accent};

    font-weight: 700;
    cursor: pointer;
  }

  summary:focus-visible {
    outline: 3px solid
      ${({ theme }) => theme.colors.semantic.border.focusInfo};
    outline-offset: 3px;
  }

  p {
    line-height: 1.5;
  }
`;

export default function ProfessionalCard({
  name,
  specialty,
  registration,
  photo,
  initials,
  inclusions,
  services,
  description,
  onSchedule,
}: ProfessionalCardProps) {
  return (
    <Card>
      <ProfessionalInfo>
        <PhotoWrapper>
          {photo ? (
            <ProfessionalPhoto
              src={photo}
              alt={`Foto de ${name}`}
              width={96}
              height={96}
            />
          ) : (
            <span aria-hidden="true">{initials}</span>
          )}
        </PhotoWrapper>

        <ProfessionalDetails>
          <ProfessionalName>{name}</ProfessionalName>
          <ProfessionalSpecialty>{specialty}</ProfessionalSpecialty>
          <Registration>{registration}</Registration>
        </ProfessionalDetails>
      </ProfessionalInfo>

      <Section>
        <SectionTitle>Compromissos com inclusão</SectionTitle>

        <TagList>
          {inclusions.map((inclusion) => (
            <Tag key={inclusion}>{inclusion}</Tag>
          ))}
        </TagList>
      </Section>

      <Section>
        <SectionTitle>Atendimento</SectionTitle>

        <ServiceList>
          {services.map((service) => (
            <li key={service}>{service}</li>
          ))}
        </ServiceList>
      </Section>

      <CardActions>
        <ScheduleButton type="button" onClick={onSchedule}>
          Agendar consulta
        </ScheduleButton>
      </CardActions>

      <MoreInfo>
        <summary>Mais informações</summary>
        <p>{description}</p>
      </MoreInfo>
    </Card>
  );
}
