import LeftSidebar from "../LeftSidebar";
import RightSidebar from "../RightSidebar";
import Navbar from "../Navbar";
import Feed from "../Feed";
import { useState } from "react";

const Home = () => {
  const [displaySidenav, SetdisplaySidenav] = useState<boolean>(false);

  const toggleDisplaynav = () => {
    SetdisplaySidenav(!displaySidenav);
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
