import { Container } from "../globals";

interface sectionTitleProps {
  title: string;
  subtitle: string;
  className?: string;
}

const SectionTitle = ({ title, subtitle, className }: sectionTitleProps) => {
  return (
    <Container className={`sectionTitle ${className}`}>
      <p className="sectionTitle-subtitle">{subtitle}</p>
      <h2 className="sectionTitle-title">{title}</h2>
    </Container>
  );
};

export default SectionTitle;
