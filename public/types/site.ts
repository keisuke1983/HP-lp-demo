export type IndustryKey =
  | "painting"
  | "demolition"
  | "roofing"
  | "plumbing"
  | "electrical"
  | "landscaping"
  | "construction";

export type HeroVariant = "A" | "B" | "C";

export type VisualStyle = {
  serviceImageShape?: "wide" | "portrait" | "slab" | "soft";
  worksLayout?: "split" | "magazine" | "stacked";
  mapLayout?: "panel" | "photoBlend";
};

export type SectionKey =
  | "services"
  | "strengths"
  | "works"
  | "area"
  | "price"
  | "map"
  | "faq"
  | "company"
  | "contact"
  | "cta";

export type Client = {
  slug: string;
  industry: IndustryKey;
  companyName: string;
  representative: string;
  area: string;
  address: string;
  phone: string;
  businessHours?: string;
  closedDays?: string;
  founded: string;
  license: string;
  existingSiteUrl?: string;
  sourceUrls?: string[];
  snsUrls?: string[];
  googleReviewSummary?: string;
  shortDescription: string;
  representativeMessage?: string;
  heroImage: string;
  heroAlt: string;
  sectionImages?: Partial<Record<"services" | "strengths" | "works" | "area" | "company" | "contact", string>>;
  services: string[];
  strengths: string[];
  works: Array<{
    title: string;
    location: string;
    description: string;
  }>;
  priceNotes: string[];
  serviceAreas: string[];
  googleMapEmbedUrl?: string;
  googleMapUrl?: string;
  googleBusinessProfileUrl?: string;
};

export type IndustryTheme = {
  key: IndustryKey;
  label: string;
  tone: string;
  colors: {
    background: string;
    surface: string;
    text: string;
    muted: string;
    primary: string;
    primaryText: string;
    accent: string;
    line: string;
  };
  heroVariant: HeroVariant;
  sectionOrder: SectionKey[];
  cta: {
    primary: string;
    secondary: string;
    note: string;
  };
  seo: {
    title: (client: Client) => string;
    description: (client: Client) => string;
  };
  faq: Array<{
    question: string;
    answer: string;
  }>;
  badges: string[];
  hero: {
    headline: string;
    subcopy: string;
  };
  fallbackImages: Partial<Record<"hero" | "services" | "strengths" | "works" | "area" | "company" | "contact", string>>;
  visual?: VisualStyle;
};

export type SectionProps = {
  client: Client;
  theme: IndustryTheme;
};
