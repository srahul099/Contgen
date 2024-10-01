"use client";

import React, { useState } from "react";
import SearchSection from "./_components/SearchSection";
import Templates from "@/public/Templates";
import TemplateListSection from "./_components/TemplateListSection";

function Dashboard() {
  const [userSearchInput, setUserSearchInput] = useState<string>("");
  return (
    <div>
      <SearchSection
        onSeachInput={(value: string) => setUserSearchInput(value)}
      />
      <TemplateListSection userSearchInput={userSearchInput} />
    </div>
  );
}

export default Dashboard;
