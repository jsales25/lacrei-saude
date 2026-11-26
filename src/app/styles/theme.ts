
export const theme = {
  colors: {
    // 1. PRIMITIVE TOKENS
    primitive: {
      emerald: {
        10: "#DFF2ED",
        20: "#B2DFD0",
        30: "#80CAB1",
        40: "#4FB494",
        50: "#29A480",
        60: "#018762",
        70: "#007756",
        80: "#014C37",
      },
      green: {
        10: "#EBF9F0",
        20: "#C4EED1",
        30: "#9CE2B2",
        40: "#75D693",
        50: "#4ECB74",
        60: "#00B15C",
        70: "#298A46",
        80: "#113B1E",
      },
      red: {
        10: "#FBEEEA",
        20: "#FCE9E9",
        30: "#F5BCBC",
        40: "#EE9090",
        50: "#963D1D",
        60: "#BC1C1C",
        70: "#9B1717",
        80: "#6F1111",
      },
      orange: {
        10: "#FDF4E6",
        20: "#F9E8CC",
        30: "#F7DDB3",
        40: "#F3D199",
        50: "#F1C580",
        60: "#EEB966",
        70: "#EBAE4D",
        80: "#E8A233",
        90: "#B95113",
      },
      blue: {
        10: "#EBF2F9",
        20: "#C4D8EE",
        30: "#9CBEE2",
        40: "#75A4D7",
        50: "#4D8ACB",
        60: "#28588A",
        70: "#1D3F63",
        80: "#11263B",
      },
      gray: {
        10: "#FFFFFF",
        20: "#F0F0F0",
        30: "#CECECE",
        40: "#BFBFBF",
        50: "#737373",
        60: "#515151",
        70: "#2D2D2D",
        80: "#131313",
      },
    },

    // 2. SEMANTIC TOKENS
    semantic: {
      background: {
        default: "#FFFFFF",
        subtle: "#F0F0F0",
        disabled: "#CECECE",
        success: "#DFF2ED",
        successHover: "#B2DFD0",
        successPressed: "#80CAB1",
        accent: "#018762",
        accentHover: "#007756",
        accentPressed: "#014C37",
        errorSubtle: "#FCE9E9",
        errorSubtleHover: "#F5BCBC",
        errorSubtlePressed: "#EE9090",
        error: "#BC1C1C",
        errorHover: "#9B1717",
        errorPressed: "#6F1111",
        warning: "#FDF4E6",
        info: "#EBF2F9",
      },

      text: {
        invert: "#FFFFFF",
        heading: "#131313",
        body: "#2D2D2D",
        accent: "#018762",
        hover: "#007756",
        pressed: "#014C37",
        disabledSubtle: "#BFBFBF",
        disabled: "#515151",
        error: "#BC1C1C",
        warning: "#B95113",
        success: "#298A46",
        info: "#28588A",
      },

      border: {
        focusOffset: "#FFFFFF",
        subtle: "#2D2D2D",
        default: "#131313",
        disabled: "#CECECE",
        hover: "#29A480",
        pressed: "#014C37",
        accent: "#018762",
        success: "#298A46",
        divider: "#B2DFD0",
        focusInfo: "#28588A",
        warning: "#B95113",
        error: "#BC1C1C",
        errorHover: "#9B1717",
        errorPressed: "#6F1111",
      },

      icon: {
        invert: "#FFFFFF",
        default: "#131313",
        accent: "#018762",
        hover: "#007756",
        pressed: "#014C37",
        disabledSubtle: "#BFBFBF",
        disabled: "#515151",
        success: "#298A46",
        error: "#BC1C1C",
        info: "#28588A",
        warning: "#B95113",
      },
    },

    // 3. COMPONENT TOKENS
    gradients: {
      primary: "linear-gradient(110deg, #018383 0%, #014687 100%)",
      subtle: "linear-gradient(110deg, #F5FFFB 0%, #FFFFFF 100%)",
      secondary: "linear-gradient(110deg, #008392 0%, #00BC86 100%)",
    },

    // Aliases temporários para manter o Button atual funcionando.
    // Vamos migrar esses usos para os tokens semânticos depois.
    primary: "#018762",
    secondary: "#007756",
    background: "#FFFFFF",
    surface: "#F0F0F0",
    text: "#2D2D2D",
    textSecondary: "#515151",
    border: "#CECECE",
  },

  // Valores provisórios: ainda vamos consultar Foundations > Espaços.
  spacing: {
    xs: "4px",
    sm: "8px",
    md: "16px",
    lg: "24px",
    xl: "32px",
    "2xl": "48px",
  },

  // Valores provisórios: ainda não coletamos os tokens de radius.
  borderRadius: {
    sm: "4px",
    md: "8px",
    lg: "16px",
    full: "9999px",
  },

  // Família tipográfica oficial ainda pendente de confirmação.
  typography: {
    fontFamily: "Arial, sans-serif",

    headline: {
      xl: {
        fontSize: "48px",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      lg: {
        fontSize: "40px",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      base: {
        fontSize: "32px",
        fontWeight: 700,
        lineHeight: 1.2,
      },
      sm: {
        fontSize: "24px",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      smHigh200: {
        fontSize: "24px",
        fontWeight: 700,
        lineHeight: 1.5,
      },
    },

    text: {
      xlHigh200: {
        fontSize: "18px",
        fontWeight: 700,
        lineHeight: 1.5,
      },
      xl: {
        fontSize: "18px",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      base: {
        fontSize: "16px",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      baseHigh200: {
        fontSize: "16px",
        fontWeight: 700,
        lineHeight: 1.5,
      },
      sm: {
        fontSize: "14px",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      smHigh200: {
        fontSize: "14px",
        fontWeight: 600,
        lineHeight: 1.5,
      },
      xs: {
        fontSize: "12px",
        fontWeight: 400,
        lineHeight: 1.5,
      },
      xsHigh200: {
        fontSize: "12px",
        fontWeight: 700,
        lineHeight: 1.5,
      },
    },
  },
};
