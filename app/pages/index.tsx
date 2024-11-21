import HomeBanner from "@/components/organisms/HomeBanner";
import { GetStaticProps } from "next";
import { baseApi, goToSection } from "@/lib";
import { Home, HomeData } from "@/interfaces/home";
import { useNavbarContext } from "@/context/navbar.context";
import { useEffect } from "react";
import HomeProducts from "@/components/organisms/HomeProducts";
import HomeMiddle from "@/components/organisms/HomeMiddle";
import HomeAbout from "@/components/organisms/HomeAbout";
import HomeMap from "@/components/organisms/HomeMap";
import { SeoEngine } from "@/components/globals";
import { getGenerals } from "@/lib/getGenerals";
import { useObserver } from "@/hooks";

interface HomeProps {
  home: HomeData;
}

export default function Home({ home }: HomeProps) {
  const { setActiveSection, scrolltoSectionFromOtherPage } = useNavbarContext();
  const { setElements, entries } = useObserver({
    rootMargin: "-13% 0px -80% 0px",
  });

  useEffect(() => {
    const elements = document.querySelectorAll("[data-section]");
    setElements(elements);
  }, [setElements]);

  useEffect(() => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const section = entry.target.getAttribute("data-section");

        setActiveSection(String(section));
      }
    });
  }, [entries, setActiveSection]);
  useEffect(() => {
    if (scrolltoSectionFromOtherPage !== "/contact") {
      goToSection(scrolltoSectionFromOtherPage);
    }
  }, [scrolltoSectionFromOtherPage]);

  return (
    <main className="main-page">
      <section>
        <HomeBanner
          imgs={home.home_banner.slider_images.image}
          imgsTablet={home.home_banner.slider_images.image_desktop}
          imgsDesktop={home.home_banner.slider_images.image_desktop}
        ></HomeBanner>
        <HomeProducts
          title={home.home_products.title}
          subtitle={home.home_products.subtitle}
          products_card={home.home_products.products_card}
        ></HomeProducts>
        <HomeMiddle
          title={home.home_middle.title}
          subtitle={home.home_middle.text}
          image={home.home_middle.bg_image}
          downloader={home.home_middle.downloader}
        ></HomeMiddle>

        <HomeAbout
          ad_cards={home.home_about.ad_cards}
          title={home.home_about.title}
          subtitle={home.home_about.subtitle}
          text={home.home_about.text}
          image={home.home_about.image.url}
        ></HomeAbout>

        <HomeMap
          title={home.home_map.title}
          subtitle={home.home_map.subtitle}
          map_url={home.home_map.map_url}
        />
        <SeoEngine seo={home.seo} />
      </section>
    </main>
  );
}

/* LLAMADA AL API */

export const getStaticProps: GetStaticProps = async () => {
  const generals = await getGenerals();
  const [{ data: home }] = await Promise.all([
    baseApi.get<Home>("/home?populate=deep"),
  ]);

  return {
    props: {
      home: home.data,
      generals,
    },
    revalidate: 1,
  };
};
