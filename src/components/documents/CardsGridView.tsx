import React from "react";
import { FileText, ChevronRight } from "lucide-react";
import Link from "next/link";
import { Document } from "@/types";

const CardsGridView = ({slug, doc} : {slug: string, doc: Document}) => {
  return (
    <Link
      key={slug}
      href={`/documents/${slug}`}
      className="bg-white border border-gray-200 rounded-xl p-6 hover:border-[#C9A46C] transition-all shadow-md hover:shadow-xl block group transform hover:-translate-y-1"
    >
      <div className="flex flex-col h-full">
        <div className="flex items-start gap-3 mb-4">
          <div className="p-3 bg-[#C9A46C]/10 rounded-lg group-hover:bg-[#C9A46C]/20 transition-colors">
            <FileText className="w-6 h-6 text-[#C9A46C]" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="text-base font-bold text-gray-800 break-words group-hover:text-[#C9A46C] transition-colors line-clamp-2 mb-2">
              {doc.title}
            </h3>
          </div>
        </div>

        <p className="text-sm text-gray-600 line-clamp-3 mb-4 flex-1">
          {doc.about}
        </p>

        <div className="flex items-center justify-end pt-4 border-t border-gray-200">
          <ChevronRight className="w-5 h-5 text-[#C9A46C] group-hover:translate-x-1 transition-transform" />
        </div>
      </div>
    </Link>
  );
};

export default CardsGridView;
