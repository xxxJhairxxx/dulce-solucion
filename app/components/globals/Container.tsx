import { FC, PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {
  className?: string;
  image?: string;
}

export const Container: FC<ContainerProps> = ({
  children,
  className,
  image,
}) => {
  return (
    <div
      className={`container-general ${className}`}
      style={{ backgroundImage: `url("${image}")` }}
    >
      {children}
    </div>
  );
};
