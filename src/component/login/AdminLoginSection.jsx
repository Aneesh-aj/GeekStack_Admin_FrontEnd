import React, { useState } from "react";
// import { message } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";

import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { adminLoginHandler } from "../../utils/api";
import { addAdmin } from "../../redux/slice/adminSlice";

const AdminLoginSection = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const validateFields = (data) => {
    let errors = {};

    if (!data.email.trim()) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = "Email is invalid";
    }

    if (!data.password) {
      errors.password = "Password  is required";
    }

    setErrors(errors);
    return Object.keys(errors).length === 0;
  };
  const handleSubmit = async (events) => {
    events.preventDefault();
    setLoading(true);
    const data = {
      email: email,
      password: password,
    };
    try {
      if (validateFields(data)) {
        console.log(data)
        const res = await adminLoginHandler(data);
        console.log(" m ",res);
        setEmail("");
        setPassword("");
        setLoading(false);
        const role = res?.role?.admin;
        console.log(" the role ",role)

        if (role === "superAdmin" ) {
          console.log('2')
          dispatch(
            addAdmin({
              id: res?.id,
              accessToken:res?.accessToken,
              refreshToken:res?.refreshToken,
              email: res?.email,
              role: res?.role,
            })
          );

          localStorage.setItem('token',res.token)
          console.log('3')
          navigate("/admin/home");
        }  
      }
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
      console.log(`Error occured in adminLogin:${error}`);
    //   message.error(error.response.data.message);
      setErrors({});
      return;
    }
  };
  return (
    <section className="h-screen flex justify-center items-center w-screen p-4 ">
      <div className="space-y-4">
        <div className="bg-white border rounded-2xl shadow-lg p-6 flex justify-center">
          <img  alt="" className="object-contain max-h-6 sm:max-h-8" />
        </div>
        <div className="bg-white">
          <form
            component="form"
            className="flex flex-col items-center border p-5 xs:p-10 shadow-lg rounded-2xl space-y-4  w-full md:w-auto"
          >
            <div className="flex flex-col w-full space-y-1 ">
              <span className=" text-xl sm:text-2xl font-extrabold">
                Sign in to account
              </span>
              <span className="text-sm text-[#898989] font-medium">
                Enter Your email & password to login
              </span>
            </div>
            <div className="flex flex-col   space-y-1 w-full md:w-[400px]  ">
              <label
                htmlFor="password"
                className={` text-lg ${
                  errors.email ? "text-red-400 text-base " : " "
                } `}
              >
                {errors.email ? errors.email : "Email address"}
              </label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setErrors((pre) => ({
                    ...pre,
                    email: null,
                  }));
                }}
                className={`placeholder-gray-500 rounded-[5px] w-full md:w-[400px] border  h-[40px]  px-2 py-2 ${
                  errors.email ? "border-red-400" : "border-gray-400"
                }  `}
                placeholder="Enter Email"
              />
            </div>
            <div className="flex flex-col space-y-1 pb-8 w-full md:w-[400px] ">
              <label
                htmlFor="password"
                className={` text-lg ${
                  errors.password ? "text-red-400 text-base" : " "
                } `}
              >
                {errors.password ? errors.password : "Password"}
              </label>
              <div className="flex justify-end items-center  ">
                <input
                  type={show ? "text" : "password"}
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setErrors((pre) => ({
                      ...pre,
                      password: null,
                    }));
                  }}
                  className={`placeholder-gray-500 rounded-[5px] w-full md:w-[400px] border  h-[40px]  px-2 py-2 ${
                    errors.password ? "border-red-400 " : "border-gray-400"
                  }  `}
                  placeholder="Password"
                />
                <div
                  onClick={() => setShow(!show)}
                  className=" -ml-7 cursor-pointer  mr-2 text-center font-normal text-sm"
                >
                  {show ? (
                    <FontAwesomeIcon
                      icon={faEyeSlash}
                      size="lg"
                      style={{ color: "#000000" }}
                    />
                  ) : (
                    <FontAwesomeIcon
                      icon={faEye}
                      size="lg"
                      style={{ color: "#030303" }}
                    />
                  )}
                </div>
              </div>
              {/* <div className="flex justify-between text-[#268bf7]">
                <Link to={"/signup"}>Create Account</Link>
                <Link to={"/forget-password"}>Forget Password?</Link>
              </div> */}
            </div>

            <div className="flex  w-full justify-center ">
              <motion.button
                type="submit"
                disabled={loading}
                onClick={handleSubmit}
                whileHover={{
                    backgroundColor:  "#37ed81" ,
                    color:  "white",
                    border:"1px solid #37ed81"
                  }}
                className="border border-black font-semibold w-full  rounded-[5px] flex justify-center text-black  ease-in duration-300 delay-75 items-center h-[40px] hover:rounded-2xl md:w-[297px]  py-1 text-lg "
              >
                {loading ? "loading" : "Login"}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AdminLoginSection