import Image from "next/image";
const RightSidebar = () => {
  return (
    <div className="mr-7 w-72 bg-[#1f1e1e]  mobile:hidden tablet:block mt-16 fixed desktop:block border-l top-0 h-[100%] right-0 bottom-0">
      <div className="mt-10 hover:bg-[#353434] py-5 cursor-pointer">
        <Image
          width={52}
          height={52}
          className=" ml-10"
          src="/assets/Afrixpace logo.png"
          alt=""
        />
      </div>
    </div>
  );
};

export default RightSidebar;
