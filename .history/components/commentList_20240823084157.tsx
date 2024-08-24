/* eslint-disable @typescript-eslint/no-explicit-any */
import { auth } from "../firebase/firebaseConfig";
import { useAuthState } from "react-firebase-hooks/auth";
interface CommentType {
  comments: any;
  newComment: string;
  showcomment: boolean;
  handleAddComment: any;
  setnewcomment: any;
}

const CommentList = (props: CommentType) => {
  const [user] = useAuthState(auth);

  return (
    <div>
      <div>
        {props.showcomment && (
          <div className="mb-2 mx-2">
            <div>
              <div className="flex items-center gap-5 justify-between rounded-md">
                <div className="">
                  <img
                    className={`w-10 h-10 rounded-full ${
                      !user?.photoURL && " h-10 w-10"
                    }`}
                    src={user?.photoURL || "public/assets/avatar.png"}
                    alt=""
                  />
                </div>
                <div className="max-w-[500px] text-white flex-1">
                  <textarea
                    value={props.newComment}
                    onChange={props.setnewcomment}
                    placeholder="Type your text..."
                    className="w-full border p-1 flex-1 rounded-lg focus:outline-none resize-none bg-[#616060]"
                  />
                </div>
                <div className="bg-green-600 rounded-lg hover:bg-green-400">
                  <button
                    onClick={props.handleAddComment}
                    className="text-white p-2 "
                  >
                    Add comment
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-4">
              <div>
                {props.comments.map((comment: any) => (
                  <div
                    key={comment.id}
                    className="flex gap-5 items-center pb-2 mb-4  ml-10"
                  >
                    <img
                      className={`w-10 h-10 rounded-full ${
                        !user?.photoURL && "h-10 w-10"
                      }`}
                      src={user?.photoURL || "assets/avatar.png"}
                      alt=""
                    />
                    <p className="flex flex-col break-words tablet:max-w-[300px] desktop:max-w-[500px] mobile:max-w-[370px] bg-[#616060] p-3 rounded-xl">
                      {comment.posts}
                      <span>
                        {new Date(
                          comment.timestamp?.seconds * 1000
                        ).toLocaleString()}
                      </span>
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentList;
