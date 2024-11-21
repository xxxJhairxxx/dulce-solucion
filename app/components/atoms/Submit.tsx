import React from "react";

interface SubmitProps {
  text: string;
  className?: string;
  iconCLass?: string;
}

const Submit = ({ text, className, iconCLass }: SubmitProps) => {
  return <button className={`Btn ${className} `}>{text}</button>;
};

export default Submit;
