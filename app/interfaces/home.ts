import { Middleware } from "next/dist/lib/load-custom-routes";
import { Picture, FileDocument, MetaSEO } from "./shared";

export interface Home {
  data: HomeData;
  meta: HomeMeta;
}

export interface HomeData {
  id: 1;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
  home_banner: HomeBanner;
  home_products: HomeProducts;
  home_middle: homeMiddle;
  home_about: homeAbout;
  home_map: homeMap;
  seo: MetaSEO;
}

/*+++++++++++HOME BANNER ++++++++++++++*/
export interface HomeBanner {
  id: number;
  slider_images: SliderImages;
}

export interface SliderImages {
  id: number;
  image: Picture[];
  image_desktop: Picture[];
}

/*+++++++++++HOME PRODUCTS ++++++++++++++*/
export interface HomeProducts {
  id: 1;
  title: string;
  subtitle: string;
  products_card: productsCard[];
}

export interface productsCard {
  id: number;
  title: string;
  text: string;
  image: Picture;
  modal_title: string;
  modal_list: string;
  modal_color: string;
  activar_lista: boolean;
  productIcon: Picture;
}

/*+++++++++++HOME MIDDLE ++++++++++++++*/
export interface homeMiddle {
  id: number;
  title: string;
  text: string;
  bg_image: Picture;
  downloader: MiddleDownloader;
}

export interface MiddleDownloader {
  id: number;
  text: string;
  document: FileDocument;
}
export interface homeAbout {
  id: number;
  subtitle: string;
  title: string;
  text: string;
  image: Picture;
  ad_cards: adCards[];
}
export interface adCards {
  id: number;
  title: string;
  text: string;
  image: Picture;
}

export interface homeMap {
  id: number;
  title: string;
  subtitle: string;
  map_url: string;
}

export interface HomeMeta {}
