import { useGenerals } from "@/context/generals.context";
import SectionTitle from "../atoms/secctionTitle";

interface HomeMapProps {
  title: string;
  subtitle: string;
  map_url: string;
}

const HomeMap = ({ title, subtitle, map_url }: HomeMapProps) => {
  const { general } = useGenerals();
  return (
    <section className="homeMap">
      <SectionTitle
        className="homeMap-title"
        title={title}
        subtitle={subtitle}
      />

      <div className="homeMap__map">
        <iframe src={general.map_url} style={{ border: "0" }} loading="lazy" />
      </div>
    </section>
  );
};

export default HomeMap;
