"use client";
import { useRouter } from "next/navigation";
const CreatePost = () => {
  const router = useRouter();

  const Post = () => {
    router.push("/");
  };

  return (
    <div>
      <div className="bg-black h-screen flex items-center justify-center overflow-hidden">
        <div className="bg-white h-[500px] w-[700px] rounded-sm">
          <div className="mt-5 text-center border-b pb-3">
            <p className="text-3xl">Create Post</p>
          </div>
          <div>
            <textarea
              placeholder="Create your post"
              className="w-[660px] m-5 outline-none border pl-2 pt-1"
              name=""
              id=""
            ></textarea>
          </div>

          <div className="flex flex-row justify-between mx-5 items-center">
            <input placeholder="create your post" type="file" accept="" />

            <button
              onClick={Post}
              className="bg-blue-600 p-2 rounded-xl font-bold w-20 hover:bg-blue-500 text-white"
            >
              Post
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePost;
