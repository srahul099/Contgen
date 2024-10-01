import React from "react";
import FormSection from "../_components/FormSection";
import OutputSection from "../_components/OutputSection";
import { TEMPLATE } from "../../_components/TemplateListSection";
import templates from "@/app/(data)/templates";
import { Button } from "@/components/ui/button";

interface PROPS {
  params: {
    "template-slug": string;
  };
}
function CreateNewContent(props: PROPS) {
  const selectedTemplate: TEMPLATE | undefined = templates.find(
    (item) => item.slug == props.params["template-slug"]
  );
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-5 h-screen">
      <FormSection templateData={selectedTemplate} />
      <div className="col-span-2">
        <OutputSection />
      </div>
    </div>
  );
}

export default CreateNewContent;
