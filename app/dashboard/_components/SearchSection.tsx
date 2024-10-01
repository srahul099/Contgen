import { SearchInput } from "@/components/ui/Search-Input";
import React from "react";

function SearchSection({ onSeachInput }: any) {
  const placeholders = [
    "Search for blog titles",
    "Search for blog ideas",
    "Search for blog content",
    "Search for Youtube Tags",
  ];
  return (
    <div className="flex flex-col items-center justify-center p-14 m-8 rounded-md bg-gradient-to-br from-[#3c376a] to-[#0c0a27]">
      <h2 className="text-3xl font-bold">Browse All Templates</h2>
      <p>What would you like to create today</p>
      <div className="w-full flex items-center justify-center mt-6">
        <SearchInput
          placeholders={placeholders}
          btncolor={"white"}
          onChange={(event) => onSeachInput(event.target.value)}
          onSubmit={(value) => onSeachInput(value)}
        />
      </div>
    </div>
  );
}

export default SearchSection;
