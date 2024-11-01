"use client";
import Image from "next/image";
import Link from "next/link";
import { getProviders } from "next-auth/react";
import { useState, useEffect } from "react";

import { MouseEventHandler } from "react";

type sideNavtype = {
  toggleDisplaynav: MouseEventHandler<HTMLDivElement>;
  displaySidenav: boolean;
};
const Navbar = (props: sideNavtype) => {
  const isLoggedIn = true;
  const [providers, setProviders] = useState<any>(null);

  useEffect(() => {
    const setProvider = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setProvider();
  }, []);

  return (
    <nav className="left-navbar bg-[#080808] backdrop-blur-md bg-opacity-30 flex justify-between fixed top-0 left-0 right-0 h-16 border-b border-gray-200 items-center z-10">
      <div
        onClick={props?.toggleDisplaynav}
        className={`ml-2 xl:hidden h-9 w-9 rounded-full hover:bg-[hsl(216,8%,12%)] active:bg-[#182947] content-center cursor-pointer relative group ${
          props.displaySidenav && "bg-green-400 hover:bg-green-500"
        }`}
      >
        <Image
          className=" m-auto  p-1 "
          width={30}
          height={30}
          src="/assets/icons/hamburger-menu (1).png"
          alt="hambuger-icon"
        />
        <div className="bg-gray-700 rounded-lg w-18 absolute  top-12 transform translate-x-0  duration-300 opacity-0 transition-opacity group-hover:visible invisible group-hover:opacity-100 text-center">
          <p className="text-white px-4">Navigation</p>
        </div>
      </div>

      <div className="ml-4 relative fle group w-auto">
        <Link href="/" className="text-white text-3xl">
          AfriXpace
        </Link>
        <div className="bg-gray-700 rounded-lg w-auto absolute  transform translate-x-1/2 translate-y-3 duration-300 opacity-0 transition-opacity group-hover:visible invisible group-hover:opacity-100 text-center z-50">
          <p className="text-white px-4 ">Home</p>
        </div>
      </div>
      <div className="middle-navbar mx-2 max-w-[500px] flex flex-1 ">
        <input
          className="h-8 w-full px-2 text-md outline-none border rounded-l-lg"
          placeholder="Search"
          type="text"
        />

        <div className="rounded-r-lg cursor-pointer h-8 w-10 bg-green-600 hover:bg-green-500">
          <Image
            width={15}
            height={15}
            className="items-center m-auto mt-2"
            src="/assets/icons/search-icon.png"
            alt=""
          />
        </div>
      </div>
      <div className="right-navbar flex gap-2 whitespace-nowrap mr-9">
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#1c1e21]  cursor-pointer hover:bg-[#182947] relative group">
          <Link href="/createpost">
            <Image
              width={35}
              height={35}
              className="p-1"
              src="/assets/icons/create-removebg-preview (1).png"
              alt=""
            />
          </Link>
          <div>
            <div className="bg-gray-700 rounded-lg w-auto absolute transform translate-x-2 translate-y-11 duration-300 opacity-0 transition-opacity group-hover:visible invisible group-hover:opacity-100 text-center">
              <p className="text-white px-4">Create Post</p>
            </div>
          </div>
        </div>
        <div className="h-8 w-8 rounded-full group relative bg-[#1c1e21] hover:bg-[#182947] cursor-pointer">
          <Image
            className="p-1"
            width={38}
            height={38}
            src="/assets/icons/noti-removebg-preview-removebg-preview.png"
            alt=""
          />
          <div className="bg-gray-700 rounded-lg w-auto absolute  transform -translate-x-8 translate-y-4 duration-300 opacity-0 transition-opacity group-hover:visible invisible group-hover:opacity-100 text-center">
            <p className="text-white px-4">Notification</p>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="flex items-center ">
            <div className="flex items-center gap-2 ">
              <div className="relative group">
                <Image
                  width={33}
                  height={33}
                  className="rounded-full cursor-pointer
                  "
                  src="/assets/icons/avatar.png"
                  alt=""
                />
                <div className="bg-gray-700 rounded-lg w-auto absolute  transform -translate-x-8 translate-y-4 duration-300 opacity-0 transition-opacity group-hover:visible invisible group-hover:opacity-100 text-center z-10">
                  <p className="text-white px-4">{}</p>
                </div>
              </div>
            </div>
            <div>
              <Link href="/signup">
                <button>Sign up</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
