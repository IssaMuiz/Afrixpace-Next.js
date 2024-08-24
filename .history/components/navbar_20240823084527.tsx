import { auth } from "./firebase/firebaseConfig";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { MouseEventHandler } from "react";

type sideNavtype = {
  toggleDisplaynav: MouseEventHandler<HTMLDivElement>;
  displaySidenav: boolean;
};
const Navbar = (props: sideNavtype) => {
  const [user] = useAuthState(auth);
  const navigate = useNavigate();

  const signOutUser = async () => {
    await signOut(auth);
  };

  const navLogin = () => {
    navigate("/sign-up");
  };
  return (
    <div className="left-navbar bg-[#080808] backdrop-blur-md bg-opacity-30 flex justify-between fixed top-0 left-0 right-0 h-16 border-b border-gray-200 items-center z-10">
      <div
        onClick={props?.toggleDisplaynav}
        className={`ml-2 desktop:hidden h-9 w-9 rounded-full hover:bg-[hsl(216,8%,12%)] active:bg-[#182947] content-center cursor-pointer relative group ${
          props.displaySidenav && "bg-green-400 hover:bg-green-500"
        }`}
      >
        <img
          className=" m-auto h-6 w-6 p-1 "
          src="assets/hamburger-menu (1).png"
          alt="hambuger-icon"
        />
        <div className="bg-gray-700 rounded-lg w-18 absolute  top-12 transform translate-x-0  duration-300 opacity-0 transition-opacity group-hover:visible invisible group-hover:opacity-100 text-center">
          <p className="text-white px-4">Navigation</p>
        </div>
      </div>

      <div className="ml-4 relative fle group w-auto">
        <Link to="/" className="text-white text-3xl">
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
          <img
            className="items-center h-4 w-4 m-auto mt-2"
            src="assets/search-icon.png"
            alt=""
          />
        </div>
      </div>
      <div className="right-navbar flex gap-2 whitespace-nowrap mr-9">
        <div className="h-8 w-8 flex items-center justify-center rounded-full bg-[#1c1e21]  cursor-pointer hover:bg-[#182947] relative group">
          <Link to="/create-post">
            <img
              className="p-1 h-7 w-7"
              src="assets/create-removebg-preview (1).png"
              alt=""
            />
          </Link>
          <div className="bg-gray-700 rounded-lg w-auto absolute transform translate-x-2 translate-y-11 duration-300 opacity-0 transition-opacity group-hover:visible invisible group-hover:opacity-100 text-center">
            <p className="text-white px-4">Create Space</p>
          </div>
        </div>
        <div className="h-8 w-8 rounded-full group relative bg-[#1c1e21] hover:bg-[#182947] cursor-pointer">
          <img
            className="p-1"
            src="assets/noti-removebg-preview-removebg-preview.png"
            alt=""
          />
          <div className="bg-gray-700 rounded-lg w-auto absolute  transform -translate-x-8 translate-y-4 duration-300 opacity-0 transition-opacity group-hover:visible invisible group-hover:opacity-100 text-center">
            <p className="text-white px-4">Notification</p>
          </div>
        </div>

        <div className="flex items-center ">
          <div className="flex items-center ">
            {user ? (
              <div className="flex items-center gap-2 ">
                <div className="relative group">
                  <img
                    className="h-8 w-8 rounded-full cursor-pointer
                  "
                    src={user?.photoURL as string | undefined}
                    alt=""
                  />
                  <div className="bg-gray-700 rounded-lg w-auto absolute  transform -translate-x-8 translate-y-4 duration-300 opacity-0 transition-opacity group-hover:visible invisible group-hover:opacity-100 text-center z-10">
                    <p className="text-white px-4">{user?.displayName}</p>
                  </div>
                </div>
                <button
                  onClick={signOutUser}
                  className=" border bg-gray-200 rounded-md px-1 hover:bg-gray-300"
                >
                  Log out
                </button>
              </div>
            ) : (
              <button
                onClick={navLogin}
                className="border bg-gray-200 px-1 rounded-md"
              >
                Sign up
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
