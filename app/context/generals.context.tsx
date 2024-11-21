import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";

import { GeneralData } from "../interfaces/general";
import { MultilanguageData } from "../interfaces/multilanguage";

export interface ControllerState {
  general: GeneralData;
  multilanguage: MultilanguageData;
}

const useGeneralsController = ({
  general,
  multilanguage,
}: ControllerState): ControllerState => {
  const [generals, setGenerals] = useState({ general, multilanguage });

  return { general: generals.general, multilanguage: generals.multilanguage };
};

const initialState: ControllerState = {
  general: {
    id: 1,
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    address: "",
    address_url: "",
    phone: "",
    email: "",
    map_url: "",
    schedule: "",
    tag_manager: "",
    pixel_facebook: "",
    logo: {
      id: 10,
      name: "",
      alternativeText: "",
      caption: "",
      width: 0,
      height: 0,
      formats: null,
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
    },
    social_networks: [],
    logo_mobile: {
      id: 10,
      name: "",
      alternativeText: "",
      caption: "",
      width: 0,
      height: 0,
      formats: null,
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
    },
    calendar: "",
  },
  multilanguage: {
    id: 1,
    lbl_see_products: "",
    lbl_contact_us: "",
    lbl_list_products: "",
    lbl_rights: "",
    lbl_year: "",
    createdAt: "",
    updatedAt: "",
    publishedAt: "",
    lbl_send: "",
    menu: [],
  },
};

const GeneralsContext =
  createContext<ReturnType<typeof useGeneralsController>>(initialState);

interface GeneralsProviderProps extends PropsWithChildren {
  generals: ControllerState;
}

export const GeneralsProvider: FC<GeneralsProviderProps> = ({
  children,
  generals,
}) => {
  return (
    <GeneralsContext.Provider value={useGeneralsController(generals)}>
      {children}
    </GeneralsContext.Provider>
  );
};

export const useGenerals = () => useContext(GeneralsContext);
