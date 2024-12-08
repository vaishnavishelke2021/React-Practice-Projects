// "use client";

// import Link from "next/link";
// import React, { useEffect } from "react";
// import { useRouter } from "next/navigation";
// import axios from "axios";
// import dotenv from "dotenv";

// dotenv.config();

// export default function SignUpPage() {
//   const router = useRouter();
//   const [user, setUser] = React.useState({
//     username: "",
//     email: "",
//     password: "",
//   });

//   const [buttonDisabled, setButtonDisabled] = React.useState(false);
//   const [loading, setLoading] = React.useState(false);

//   // const API_BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

//   const onSignUp = async () => {
//     if (!user.email || !user.password || !user.username) {
//       alert("All fields are required.");
//       return;
//     }
//     try {
//       setLoading(true);
//       const response = await axios.post("/api/user/signup", user, {
//         headers: { "Content-Type": "application/json" },
//       });

//       // const response = await axios.post(`${API_BASE_URL}/register`, user, {
//       //   headers: { "Content-Type": "application/json" },
//       // });
//       console.log("SignUp successful with data ", response.data);
//       router.push("/login");
//     } catch (error) {
//       console.log("Error signing up user:", error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   useEffect(() => {
//     if (
//       user.email.length > 0 &&
//       user.password.length > 0 &&
//       user.username.length > 0
//     ) {
//       setButtonDisabled(false);
//     } else {
//       setButtonDisabled(true);
//     }
//   }, [user]);

//   return (
//     <div className="">
//       <h2 className="text-2xl font-extrabold text-center text-black my-10">
//         {loading ? "loading..." : "SignUp Page"}
//       </h2>

//       <div className="flex space-y-5 flex-col justify-center items-center border-2 p-7 w-fit rounded-md mx-auto">
//         <div>
//           <label
//             htmlFor="username"
//             className="block text-sm font-medium text-gray-700"
//           >
//             User Name
//           </label>
//           <input
//             type="text"
//             id="username"
//             value={user.username}
//             onChange={(e) => setUser({ ...user, username: e.target.value })}
//             placeholder="username"
//             className="mt-1 block w-[300px] rounded-md border-gray-600 bg-slate-100 p-2 px-3"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="username"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Email
//           </label>
//           <input
//             type="email"
//             id="email"
//             value={user.email}
//             onChange={(e) => setUser({ ...user, email: e.target.value })}
//             placeholder="email"
//             className="mt-1 block w-[300px] rounded-md border-gray-600 bg-slate-100 p-2 px-3"
//           />
//         </div>

//         <div>
//           <label
//             htmlFor="username"
//             className="block text-sm font-medium text-gray-700"
//           >
//             Password
//           </label>
//           <input
//             type="password"
//             id="password"
//             value={user.password}
//             onChange={(e) => setUser({ ...user, password: e.target.value })}
//             placeholder="password"
//             className="mt-1 block w-[300px] rounded-md border-gray-600 bg-slate-100 p-2 px-3"
//           />
//         </div>

//         <button
//           onClick={onSignUp}
//           className={` text-white p-2 text-center w-full ${
//             buttonDisabled ? "bg-blue-400" : "bg-blue-600"
//           }`}
//         >
//           Sign Up
//         </button>
//         <Link href="/login" className="text-blue-600 font-medium text-sm">
//           Login
//         </Link>
//       </div>
//     </div>
//   );
// }

// =============== with validations =================
"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

export default function SignUpPage() {
  const router = useRouter();
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [buttonDisabled, setButtonDisabled] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const onSignUp = async () => {
    if (!user.username || !user.email || !user.password) {
      setErrorMessage("All fields are required.");
      return;
    }

    if (user.username.length < 3) {
      setErrorMessage("Username must be at least 3 characters long.");
      return;
    }

    if (!validateEmail(user.email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (user.password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    try {
      setLoading(true);
      setErrorMessage("");

      const response = await axios.post("/api/user/signup", user, {
        headers: { "Content-Type": "application/json" },
      });

      console.log("SignUp successful with data", response.data);
      router.push("/login");
    } catch (error) {
      console.error("Error signing up user:", error.message);
      if (error.response) {
        const { message } = error.response.data;
        setErrorMessage(message || "Sign-up failed. Please try again.");
      } else {
        setErrorMessage("An unexpected error occurred. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (
      user.email.length > 0 &&
      user.password.length > 0 &&
      user.username.length > 0
    ) {
      setButtonDisabled(false);
    } else {
      setButtonDisabled(true);
    }
  }, [user]);

  return (
    <div className="">
      <h2 className="text-2xl font-extrabold text-center text-black my-10">
        {loading ? "Loading..." : "SignUp Page"}
      </h2>

      <div className="flex space-y-5 flex-col justify-center items-center border-2 p-7 w-fit rounded-md mx-auto">
        {errorMessage && (
          <div className="text-red-500 text-sm text-center mb-4">
            {errorMessage}
          </div>
        )}

        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            User Name
          </label>
          <input
            type="text"
            id="username"
            value={user.username}
            onChange={(e) => setUser({ ...user, username: e.target.value })}
            placeholder="Username"
            className="mt-1 block w-[300px] rounded-md border-gray-600 bg-slate-100 p-2 px-3"
          />
        </div>

        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={user.email}
            onChange={(e) => setUser({ ...user, email: e.target.value })}
            placeholder="Email"
            className="mt-1 block w-[300px] rounded-md border-gray-600 bg-slate-100 p-2 px-3"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            value={user.password}
            onChange={(e) => setUser({ ...user, password: e.target.value })}
            placeholder="Password"
            className="mt-1 block w-[300px] rounded-md border-gray-600 bg-slate-100 p-2 px-3"
          />
        </div>

        <button
          onClick={onSignUp}
          disabled={buttonDisabled}
          className={`text-white p-2 text-center w-full ${
            buttonDisabled ? "bg-blue-400" : "bg-blue-600"
          }`}
        >
          Sign Up
        </button>
        <Link href="/login" className="text-blue-600 font-medium text-sm">
          Login
        </Link>
      </div>
    </div>
  );
}
