"use client";
import LeftSidebar from "@/components/leftSidebar";
import RightSidebar from "@/components/rightSidenav";
import Navbar from "@/components/navbar";
import Feed from "@/components/feed";
import { useState } from "react";

const Home = () => {
  const [displaySidenav, SetdisplaySidenav] = useState<boolean>(false);

  const toggleDisplaynav = () => {
    SetdisplaySidenav((prev) => !prev);
  };

  return (
    <div className="h-[2000px]">
      <Navbar
        toggleDisplaynav={toggleDisplaynav}
        displaySidenav={displaySidenav}
      />
      <div className="flex">
        <LeftSidebar displaySidenav={displaySidenav} />
        <Feed />
        <RightSidebar />
      </div>
    </div>
  );
};

export default Home;
