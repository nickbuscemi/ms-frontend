// type for the hero section content
export interface HeroContent {
    backgroundImage?: {
      asset: {
        _ref: string;
        _type: string;
      };
    };
    backgroundAlt?: string;
    titleLine1?: string;
    titleLine2?: string;
    description?: string;
  }
  