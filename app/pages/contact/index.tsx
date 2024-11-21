import style from "./style.module.css";
import ContactForm from "@/components/molecules/Form";
import { Contact, ContactData } from "@/interfaces/contact";
import { Home, HomeData } from "@/interfaces/home";
import { baseApi } from "@/lib";
import { GetStaticProps } from "next";
import { SeoEngine } from "@/components/globals/SeoEngine";
import SectionTitle from "@/components/atoms/secctionTitle";
import { useGenerals } from "@/context/generals.context";
import { getGenerals } from "@/lib/getGenerals";
import { useEffect } from "react";
import { useNavbarContext } from "@/context/navbar.context";
interface ContactProps {
  contact: ContactData;
  home: HomeData;
}

export default function Index({ contact, home }: ContactProps) {
  const { setActiveSection, scrolltoSectionFromOtherPage } = useNavbarContext();
  const { general } = useGenerals();
  const arrays = home.home_products.products_card.map(
    (item) => item.modal_title
  );

  const list = [].concat(...(arrays as any));

  useEffect(() => setActiveSection("/"), []);

  return (
    <main className={"main-page " + style.contact}>
      <div className={style.contact__ctn}>
        <SectionTitle
          className={style.contact__ctn__title}
          title={contact.title}
          subtitle={contact.subtitle}
        ></SectionTitle>

        <p className={style.contact__ctn__description}>{contact.description}</p>

        <ContactForm
          form={contact.form}
          messages={contact.messages}
          categories={list}
          send={contact.lbl_send}
        ></ContactForm>
      </div>

      <div className={style.contact__map}>
        <iframe src={general.map_url} style={{ border: "0" }} loading="lazy" />
      </div>

      <SeoEngine seo={contact.seo} />
    </main>
  );
}
export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals();
  const [{ data: contactData }, { data: home }] = await Promise.all([
    baseApi.get<Contact>(`/contact?populate=deep`),
    baseApi.get<Home>("/home?populate=deep"),
  ]);
  return {
    props: {
      contact: contactData.data,
      home: home.data,
      generals,
    },
    revalidate: 1,
  };
};
