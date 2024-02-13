import React, {useRef,Component , useState} from "react";
import "../index.css";
import { Link } from "react-router-dom";

import { CookiesProvider, useCookies } from "react-cookie";
const Login = () => {
  const [message, setMessage] = useState('');
  const [message1, setMessage1] = useState('');
  const [cookies, setCookie] = useCookies(["user", "pas"]);
  const handleChange = event => {
    setMessage(event.target.value);
    console.log(event.target.value);
    setCookie("user",event.target.value, { path: "/" });
  };
  const handleChange1 = event => {
    setMessage1(event.target.value);
    console.log(event.target.value);
    setCookie("pas",event.target.value, { path: "/" });
  };
  return (
    <div className="second h-[100vh] flex items-center justify-center">
      <div className="blockInf rounded-2xl py-2 px-2 ml:px-10">
        <h2 className="text-primary text-3xl font-jura font-normal">Sign in</h2>
        <div className="flex flex-col gap-4 pt-7 ml:items-center">
          <div className="flex justify-between ml:gap-16 flex-col ml:flex-row">
            <span className="text-white text-2xl font-juru font-[400]">
              E-mail
            </span>
            <input
              type="email"
              name="email"
              id="email"
              value={message}
              onChange={handleChange}
              className=" bg-transparent outline-none border-[1px] border-line text-white text-xl rounded-[10px] font-gil"
              placeholder="Email"
            />
          </div>
          <div className="flex justify-between ml:gap-8 flex-col ml:flex-row">
            <span className="text-white text-2xl font-juru font-[400]">
              Password
            </span>
            <input
              value={message1}
              onChange={handleChange1}
              type="password"
              name="password"
              id="password"
              className=" bg-transparent outline-none border-[1px] border-line text-white text-xl rounded-[10px] font-gil"
              placeholder="Password"
            />
          </div>
          <Link
            
            to="/form"
            className="text-white text-xl font-gilSemi flex items-center justify-center w-[240px] py-3 border-[1px] border-line rounded-full mt-4"
          >
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
