import templates from "@/app/(data)/templates";
import React, { useEffect, useState } from "react";
import TemplateCard from "./TemplateCard";

export interface TEMPLATE {
  name: string;
  desc: string;
  icon: string;
  category: string;
  slug: string;
  aiPrompt: string;
  form?: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}

function TemplateListSection({ userSearchInput }: any) {
  const [templatelist, setTemplatelist] = useState<TEMPLATE[]>(templates);
  useEffect(() => {
    if (userSearchInput) {
      const filteredList = templates.filter((template) =>
        template.name.toLowerCase().includes(userSearchInput.toLowerCase())
      );
      setTemplatelist(filteredList);
    } else {
      setTemplatelist(templates);
    }
  }, [userSearchInput]);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-5 mx-8 ">
      {templatelist.map((item: TEMPLATE, index: number) => (
        <div>
          <TemplateCard {...item} />
        </div>
      ))}
    </div>
  );
}

export default TemplateListSection;
