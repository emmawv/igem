import { FC, ReactNode } from "react";

interface TextSectionProps {
  title: string;
  children: ReactNode;
}

export const TextSection: FC<TextSectionProps> = ({ title, children }) => {
  return (
    <div className="text-section">
      <h3>{title}</h3>
      <div>{children}</div>
    </div>
  )

}