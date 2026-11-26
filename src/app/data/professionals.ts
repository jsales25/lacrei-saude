
export interface Professional {
  id: number;
  name: string;
  specialty: string;
  registration: string;
  initials: string;
  inclusions: string[];
  services: string[];
  modality: ("online" | "presencial")[];
  description: string;
}

export const professionals: Professional[] = [
  {
    id: 1,
    name: "Mariana Oliveira",
    specialty: "Psicóloga",
    registration: "CRP 02/12345",
    initials: "MO",
    inclusions: [
      "Atendimento inclusivo",
      "Acolhimento LGBTQIAPN+",
    ],
    services: [
      "Atendimento particular",
      "Atendimento online",
    ],
    modality: ["online"],
    description:
      "Atendimento psicológico com foco em acolhimento, saúde emocional e cuidado inclusivo.",
  },
  {
    id: 2,
    name: "Gabriel Santos",
    specialty: "Clínico geral",
    registration: "CRM PE 12345",
    initials: "GS",
    inclusions: [
      "Atendimento humanizado",
      "Acolhimento LGBTQIAPN+",
    ],
    services: [
      "Atendimento particular",
      "Atendimento por convênio",
    ],
    modality: ["presencial", "online"],
    description:
      "Atendimento clínico geral com foco na promoção da saúde e prevenção de doenças.",
  },
  {
    id: 3,
    name: "Camila Ferreira",
    specialty: "Nutricionista",
    registration: "CRN 6/12345",
    initials: "CF",
    inclusions: [
      "Ambiente acolhedor",
      "Atendimento inclusivo",
    ],
    services: [
      "Atendimento particular",
      "Atendimento online",
    ],
    modality: ["presencial", "online"],
    description:
      "Acompanhamento nutricional individualizado e respeitoso às necessidades de cada pessoa.",
  },
];
