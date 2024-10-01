"use client";
import React, { useState } from "react";
import { TEMPLATE } from "../../_components/TemplateListSection";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { on } from "events";

interface PROPS {
  templateData?: TEMPLATE;
}

function FormSection({ templateData }: PROPS) {
  const [formData, setFormData] = useState<any>();
  const onSubmit = (e: any) => {
    e.preventDefault();
    console.log(formData);
  };
  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  return (
    <div className="p-6 h-fit isolate rounded-xl bg-white/20 shadow-lg ring-1 ring-black/5 flex flex-col gap-2">
      <Image
        src={templateData?.icon || "/default-icon.png"}
        alt="icon"
        width={70}
        height={70}
      />
      <h1 className="text-3xl font-bold">{templateData?.name}</h1>
      <p className="text-lg font-medium text-smoke">{templateData?.desc}</p>

      <form>
        {templateData?.form?.map((item, index) => (
          <div className="my-2 flex flex-col gap-2 mb-7">
            <label className="font-bold">{item.label}</label>
            {item.field == "input" ? (
              <Input
                name={item.name}
                required={item.required}
                onChange={handleInputChange}
              />
            ) : item.field == "textarea" ? (
              <Textarea />
            ) : null}
          </div>
        ))}
        <Button className="w-full bg-black text-white py-6" onSubmit={onSubmit}>
          Generate
        </Button>
      </form>
    </div>
  );
}

export default FormSection;
