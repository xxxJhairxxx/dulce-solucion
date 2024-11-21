import { Container } from "../globals";

interface sectionTitleH1Props {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionTitleH1 = ({
  title,
  subtitle,
  className,
}: sectionTitleH1Props) => {
  return (
    <Container className={`sectionTitle ${className}`}>
      <p className="sectionTitle-subtitle">{subtitle}</p>
      <h1 className="sectionTitle-title">{title}</h1>
    </Container>
  );
};

export default SectionTitleH1;
