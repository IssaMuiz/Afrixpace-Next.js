/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";

const CreatePost = () => {
  const navigate = useNavigate();

  const post = () => {
    navigate("/");
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
            <div className=" pl-5">
              <img className="w-24 h-34" src="" alt="" />
            </div>
          </div>

          <div className="flex flex-row justify-between mx-5 items-center">
            <input placeholder="create your post" type="file" accept="" />

            <button
              onClick={post}
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
