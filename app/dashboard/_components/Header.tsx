"use client";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { Button } from "@/components/ui/moving-border";
import { SearchInput } from "@/components/ui/Search-Input";
import React from "react";

function Header() {
  const placeholders = ["Search..."];
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const onSubmit = (value: string) => {
    console.log("submitted with value:", value);
  };
  return (
    <div className="p-5 border-b-2 border-charcoal bg-black">
      <div className="flex flex-row justify-between items-center">
        <SearchInput
          placeholders={placeholders}
          onChange={handleChange}
          onSubmit={onSubmit}
          btncolor={"black"}
        />
        <Button
          duration={9000}
          borderRadius="1.75rem"
          className="bg-black text-white  border-slate-800 py-2 px-4"
        >
          Join Membership just for $9.99/Month
        </Button>
      </div>
    </div>
  );
}

export default Header;
