"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
type Sidenavtype = {
  displaySidenav: boolean;
};
const LeftSidebar = (props: Sidenavtype) => {
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Sport",
      icon: "/assets/sport_icon-removebg-preview.png",
      arrowIcon: "assets/arrow_icon-removebg-preview.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Football", link: "/football" },
        { id: 102, name: "Basketball", link: "/basketball" },
        { id: 103, name: "Long jump", link: "/long-jump" },
      ],
    },

    {
      id: 2,
      name: "Business",
      icon: "/assets/business_icon-removebg-preview.png",
      arrowIcon: "assets/arrow_icon-removebg-preview.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Investment", link: "/investment" },
        { id: 102, name: "Career", link: "/career" },
        { id: 103, name: "Marketing", link: "/marketing" },
      ],
    },
    {
      id: 3,
      name: "Technology",
      icon: "/assets/tech_icon-removebg-preview.png",
      arrowIcon: "assets/arrow_icon-removebg-preview.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Computer", link: "/computer" },
        { id: 102, name: "Programming", link: "/programming" },
        { id: 103, name: "Phones", link: "/phones" },
      ],
    },
    {
      id: 4,
      name: "Politics",
      icon: "assets/politics_icon-removebg-preview.png",
      arrowIcon: "/assets/arrow_icon-removebg-preview.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "National politics", link: "/nat-politics" },
        { id: 102, name: "International politics", link: "/int-politics" },
      ],
    },

    {
      id: 5,
      name: "Games",
      icon: "/assets/games_icon-removebg-preview.png",
      arrowIcon: "assets/arrow_icon-removebg-preview.png",
      expanded: false,
      dropdownLink: [
        { id: 101, name: "Action", link: "/action-games" },
        { id: 102, name: "Adventure", link: "/adventure-games" },
        { id: 103, name: "Console", link: "/console-games" },
        { id: 103, name: "Mobile", link: "/mobile-games" },
        { id: 103, name: "Game Review", link: "/game-review" },
      ],
    },
  ]);

  const handleToggle = (id: number) => {
    setCategories((prevCategories) =>
      prevCategories.map((category) =>
        category.id === id
          ? {
              ...category,
              expanded: !category.expanded,
            }
          : category
      )
    );
  };

  return (
    <div
      className={`w-72 desktop:flex p-10 pl-12 backdrop-blur-3xl flex-col border-r bg-[#313131]  bg-opacity-80 mt-16  fixed z-0 h-full left-0 overflow-scroll top-0 scrollbar ${
        props?.displaySidenav ? "mobile:flex" : "mobile:hidden"
      }`}
    >
      {categories.map((category) => (
        <div key={category.id}>
          <div className="mb-8 border-b">
            <div
              onClick={() => handleToggle(category.id)}
              className="flex text-white justify-between items-center mb-3 hover:bg-[#1f1e1e] cursor-pointer rounded-lg p-2 w-full "
            >
              <div className="flex gap-2 ">
                <Image
                  width={6}
                  height={6}
                  className=" bg-green-400 p-1 rounded-md"
                  src={category.icon}
                  alt=""
                />
                <div className="font-bold">{category.name}</div>
              </div>

              <div>
                <Image
                  width={3}
                  height={3}
                  className={`ml-10 flex items-end transition-transform duration-100 cursor-pointer invert ${
                    category.expanded && "rotate-180 "
                  }`}
                  src={category.arrowIcon}
                  alt=""
                />
              </div>
            </div>
            <div>
              {category.expanded && (
                <div className="border-l ml-8">
                  {category.dropdownLink.map((dropDownlink, index) => (
                    <Link
                      key={index}
                      href={dropDownlink.link}
                      className=" flex  text-white flex-col text-sm pl-4 p-1 transition-transform duration-300 mb-5 hover:bg-[#1f1e1e] rounded-lg cursor-pointer"
                    >
                      {dropDownlink.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftSidebar;
