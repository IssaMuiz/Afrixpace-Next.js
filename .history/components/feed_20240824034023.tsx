import Feeds from "@/models/feeds.json";
import Comment from "./comment";
import Image from "next/image";
interface Feeds {
  name: string;
  description: string;
  image: string;
  expanded: boolean;
}

const Feed = () => {
  return (
    <div className="mt-32 max-w-[900px]  tablet:mr-[320px]  desktop:ml-[300px]  tablet:ml-[30px] flex flex-1 flex-col mx-5">
      {Feeds.map((feed) => (
        <div className="mb-1" key={feed.id}>
          <hr className="mb-5" />
          <div className=" w-full cursor-pointer rounded-lg bg-[#1f1e1e]  text-white p-2 mt-2">
            <div className=" flex items-center gap-2 pt-1">
              <div className="pt-2 mt-2">
                <Image
                  width={10}
                  height={10}
                  className={`rounded-full w-10 h-10 mb-5  `}
                  src="/assets/avatar.png"
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="flex gap-2">
                  <p className="font-bold">{feed.name}</p>
                  <p className="text-green-700 hover:underline font-bold">
                    Follow
                  </p>
                </div>

                <p>
                  posted by {"Anonymous"}.
                  <span className="ml-1">July 12 2024</span>
                </p>
              </div>
            </div>
            <div className="font-bold text-lg mb-2">{feed.description}</div>
            <div>
              <Image
                width={150}
                height={200}
                className="w-full rounded-lg"
                src={feed.image}
                alt=""
              />
            </div>
            <div className="">
              <Comment />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Feed;
