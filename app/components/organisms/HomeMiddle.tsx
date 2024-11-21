import { Container } from "../globals";
import Button from "../atoms/Button";
import { Picture } from "@/interfaces/shared";
import { time } from "console";
import { MiddleDownloader } from "@/interfaces/home";
import Enlace from "../atoms/Enlace";
import { useGenerals } from "@/context/generals.context";

interface HomeMiddleProps {
  title: string;
  subtitle: string;
  image: Picture;
  downloader: MiddleDownloader;
}

const HomeMiddle = ({
  title,
  subtitle,
  image,
  downloader,
}: HomeMiddleProps) => {
  const { general } = useGenerals();

  return (
    <section
      className="homeMiddle"
      style={{ backgroundImage: `url("${image.url}")` }}
    >
      <Container className="homeMiddle__ctn">
        <div className="homeMiddle__ctn__text">
          <h2 className="homeMiddle__ctn__text-title">{title}</h2>
          <p className="homeMiddle__ctn__text-subtitle">{subtitle}</p>
        </div>

        <Enlace
          className="homeMiddle__ctn-btn"
          text={downloader.text}
          href={downloader.document.url}
          otherPage={"target"}
        />
      </Container>
    </section>
  );
};

export default HomeMiddle;
