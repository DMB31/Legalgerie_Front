import React from "react";
import { FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Document } from "@/types";

const CardListView = ({slug, doc} : {slug: string, doc: Document}) => {
  return (
    <Link
      key={slug}
      href={`/documents/${slug}`}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#C9A46C] transition-all shadow-md hover:shadow-lg block group"
    >
      <div className="flex items-start justify-between gap-6">
        <div className="flex items-start gap-4 flex-1 min-w-0">
          <div className="p-3 bg-[#C9A46C]/10 rounded-lg group-hover:bg-[#C9A46C]/20 transition-colors flex-shrink-0">
            <FileText className="w-6 h-6 text-[#C9A46C]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-lg font-bold text-gray-800 break-words group-hover:text-[#C9A46C] transition-colors mb-3">
              {doc.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2">{doc.about}</p>
          </div>
        </div>
        <ChevronRight className="w-6 h-6 text-[#C9A46C] group-hover:translate-x-1 transition-transform flex-shrink-0 mt-1" />
      </div>
    </Link>
  );
};

export default CardListView;
