"use client";
import Link from "next/link";
import { ReactNode, useState } from "react";
import { ChevronDown } from "lucide-react";

type HeaderSubLinksProps = {
  href: string;
  label: string;
};

type HeaderDropDownProps = {
  sublinks: Array<HeaderSubLinksProps> | undefined; 
  label: string;
};

type HeaderDropDownLinkProps = {
  href: string;
  children: ReactNode;
};

export const HeaderDropDown = ({ sublinks, label }: HeaderDropDownProps) => {
  const [enterLink, setEnterLink] = useState(false);
  const [enterDropDown, setEnterDropDown] = useState(false);

  return (
    <div className="relative w-fit">
      <div
        className={`flex gap-1.5 items-center ${enterLink ? "text-[#C39A5C]" : ""}`}
        onMouseEnter={() => {
          setEnterLink(true);
        }}
        onMouseLeave={()=>{setEnterLink(false)}}
      >
        <span className="text-sm hover:text-primary transition-colors">
          {label}
        </span>{" "}
        <ChevronDown
          className={`w-4 h-4 translate-y-0.5 flex-shrink-0 transition-transform ${
            enterLink || enterDropDown ? "rotate-180" : ""
          }`}
        />
      </div>
      {enterLink || enterDropDown ? (
        <div
        onMouseEnter={()=>{setEnterDropDown(true)}}
          onMouseLeave={() => {
            setEnterDropDown(false);
          }}
          className="bg-white absolute bottom-0 left-0 translate-y-full translate-x-1/12 w-max h-auto z-[1000] border-2 rounded-lg p-1  shadow-lg"
        >
          <ul className="flex flex-col gap-1">
            {sublinks?.map((sublink, index) => {
              return (
                <HeaderDropDownLink key={index} href={sublink.href}>
                  {sublink.label}
                </HeaderDropDownLink>
              );
            })}
          </ul>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export const HeaderDropDownLink = ({
  href,
  children,
}: HeaderDropDownLinkProps) => {
  return (
    <li className="bg-white">
      <Link
        className="block text-sm py-3 px-4 roudned-lg hover:bg-[#FDFCF5] hover:text-[#C39A5C]"
        href={href}
      >
        {children}
      </Link>
    </li>
  );
};
