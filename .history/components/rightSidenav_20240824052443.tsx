import Image from "next/image";
const RightSidebar = () => {
  return (
    <div className="mr-7 w-72 bg-[#1f1e1e]  sm:hidden md:block mt-16 fixed xl:block border-l top-0 h-[100%] right-0 bottom-0">
      <div className="mt-10 hover:bg-[#353434] py-5 cursor-pointer">
        <Image
          width={200}
          height={200}
          className=" ml-10"
          src="/assets/icons/Afrixpace logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default RightSidebar;
