import { UserButton } from "@clerk/nextjs";
import React from "react";
import Header from "@/components/header";

type Props = {
  children: React.ReactNode;
};
const Dashboardlayout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main className="px-3 lg:px-14">
        
        {children}
      </main>
    </>
  );
};

export default Dashboardlayout;