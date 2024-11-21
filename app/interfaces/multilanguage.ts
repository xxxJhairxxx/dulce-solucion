export interface Multilanguage {
  data: MultilanguageData;
  meta: MultilanguageMeta;
}

export interface MultilanguageData {
  id: number;
  lbl_see_products: string;
  lbl_contact_us: string;
  lbl_rights: string;
  lbl_list_products: string;
  lbl_year: string;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  lbl_send: string;
  menu: Menu[];
}

export interface Menu {
  id: number;
  label: string;
  url: string;
}

export interface MultilanguageMeta {}
