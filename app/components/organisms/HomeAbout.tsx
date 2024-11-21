import Image from "next/image";
import { Container } from "../globals";
import SectionTitle from "../atoms/secctionTitle";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import AdCard from "../molecules/AdCard";
import { adCards } from "@/interfaces/home";

interface HomeAboutProps {
  ad_cards: adCards[];
  title: string;
  subtitle: string;
  text: string;
  image: string;
}

const HomeAbout = ({
  ad_cards,
  title,
  subtitle,
  text,
  image,
}: HomeAboutProps) => {
  return (
    <section className="homeAbout">
      <Container className="homeAbout__ctn">
        <aside className="homeAbout__ctn-ads">
          {ad_cards.map(({ title, text, image }, index) => (
            <AdCard
              key={index}
              title={title}
              text={text}
              image={image.url}
            ></AdCard>
          ))}
        </aside>

        <div className="homeAbout__ctn__main" data-section="/about">
          <div className="homeAbout__ctn__main-text">
            <SectionTitle
              className="homeAbout__ctn__main-text-title"
              title={title}
              subtitle={subtitle}
            />
            <ReactMarkdown className="homeAbout__ctn__main-text-parrafo">
              {text}
            </ReactMarkdown>
          </div>
          <div className="homeAbout__ctn__main-thumb">
            <Image src={image} alt={title} width={300} height={300} />
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HomeAbout;
