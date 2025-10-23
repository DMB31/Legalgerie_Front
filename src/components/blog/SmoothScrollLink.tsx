"use client"
import { ReactNode } from "react";

const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "center" });
    }
};

type SmoothScrollLinkProps = {
    id: string,
    className: string,
    children: ReactNode
}

const SmoothScrollLink = ({ id, className, children }: SmoothScrollLinkProps) => {
  return (
    <a onClick={() => scrollToSection(id)} className={className}>
      {children}
    </a>
  );
};

export default SmoothScrollLink;
