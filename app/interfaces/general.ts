export interface General {
  data: GeneralData;
  meta: GeneralMeta;
}

export interface GeneralData {
  id: number;
  createdAt: string;
  updatedAt: string;
  address: string;
  address_url: string;
  phone: string;
  email: string;
  publishedAt: string;
  schedule: string;
  map_url: string;
  tag_manager: string;
  pixel_facebook: string;
  logo: Logo;
  social_networks: SocialNetworks[];
  logo_mobile: Logo;
  calendar: string;
}

export interface Logo {
  id: number;
  name: string;
  alternativeText: string;
  caption: string;
  width: number;
  height: number;
  formats: null;
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl: null;
  provider: string;
  provider_metadata: null;
  createdAt: string;
  updatedAt: string;
}

export interface SocialNetworks {
  id: number;
  type: string;
  url: string;
}

export interface GeneralMeta {}
