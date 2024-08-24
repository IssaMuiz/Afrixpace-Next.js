const Login = () => {
  return (
    <div className="bg-black h-screen flex items-center justify-center ">
      <div className="bg-white h-[600px] w-[500px] rounded-sm">
        <div className="flex flex-col items-center mt-5 ">
          <h1 className="text-3xl font-bold text-green-700 mt-5">AfriXpace</h1>
          <p className="mt-2">Unifications of Africa</p>
        </div>
        <div className="px-10">
          <p className="mt-8 font-bold">Login</p>
          <form className="flex flex-col" action="">
            <label className="mt-5 font-bold" htmlFor="">
              Email
            </label>
            <input
              placeholder="Your email"
              className="border p-3 rounded-md"
              type="text"
            />
            <label className="mt-5 font-bold" htmlFor="">
              Password
            </label>
            <input
              placeholder="Your password"
              className="border p-3 rounded-md"
              type="text"
            />
            <div className="flex justify-between mt-8 ">
              <p>Forgot password?</p>
              <button className="border mt-3 px-3 text-center rounded-md bg-green-600 hover:bg-green-500 text-white w-fit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
