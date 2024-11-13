"use client";
import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";

const Layout = ({ children }) => {
  const pathname = usePathname();
  console.log(pathname); // /login, /login/studentlogin, /login/teacherlogin
  return (
    <div>
      <h1 className="py-6 text-center text-3xl font-extrabold text-slate-800">
        Login
      </h1>
      {pathname !== "/login/teacherlogin" ? (
        <div>
          <ul className="mx-auto max-w-xl flex justify-center items-center gap-x-5 text-slate-600 ">
            <li className="text-xl font-bold text-slate-800"><Link href="/login">LOGIN NAVBAR</Link></li>
            <li className="hover:underline ">
              <Link href="/login/studentlogin">Student Login</Link>
            </li>
            <li className="hover:underline ">
              <Link href="/login/teacherlogin">Teacher Login</Link>
            </li>
          </ul>
        </div>
      ) : null}

      {children}
    </div>
  );
};

export default Layout;
