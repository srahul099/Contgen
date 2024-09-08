import React from "react";
import SideNav from "./_components/SideNav";

function layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="md:w-64 hidden md:block fixed">
      <div>
        <SideNav />
      </div>
      <div className="md:ml-64">{children}</div>
    </div>
  );
}

export default layout;
