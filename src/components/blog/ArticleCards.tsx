import React from "react";
import { Card, CardContent } from "../ui/card";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip"
import { env } from "process";


const ArticleCards = ({ article }: any) => {
  const rootCMSUrl = env.PAYLAOD_BASE_URL

  const publish_date = new Date(article.publierLe).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  return (
    <Card
      className="hover:shadow-lg transition-shadow"
    >
      <div className="relative h-64">
        <Image
          src={`${rootCMSUrl}${article.image.url}`}
          alt={article.image.alt}
          fill
          className="object-cover rounded-t-md"
        />
        <div className="absolute top-0 left-4 translate-y-[-50%] bg-[#D4A574] text-white px-4 py-1.5 text-sm font-medium rounded">
          {publish_date}
        </div>
      </div>
      <CardContent className="">
          <h3 className="font-bold text-l mt-2 mb-1 !leading-6 line-clamp-2">{article.titre}</h3>

        <Tooltip>
          <TooltipTrigger><p className="text-gray-600 text-sm mb-4 line-clamp-2 text-left">{article.introduction}</p></TooltipTrigger>
          <TooltipContent className="max-w-prose text-center p-4">{article.introduction}</TooltipContent>
        </Tooltip>
        
        
        <a
          href={`articles/${article.id}`}
          className="text-[#dc974d] font-semibold text-sm hover:underline inline-flex items-center gap-1"
        >
          Lire la suite →
        </a>
      </CardContent>
    </Card>
  );
};

export default ArticleCards;
