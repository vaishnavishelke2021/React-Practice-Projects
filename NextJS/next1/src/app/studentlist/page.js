import Link from "next/link";
import React from "react";

const StudentList = () => {
  return (
    <div>
      <h1 className="py-6 text-center text-3xl font-extrabold text-slate-800">
        Student List Page
      </h1>

      <ul className="flex justify-center  items-center  flex-col gap-2 font-semibold text-slate-700 text-lg list-disc">
        <li>
          <Link href="/studentlist/Yudhishthir">Yudhishthir</Link>
        </li>
        <li>
          <Link href="/studentlist/Bheem">Bheem</Link>
        </li>
        <li>
          <Link href="/studentlist/Arjun">Arjun</Link>
        </li>
        <li>
          <Link href="/studentlist/Nakul">Nakul</Link>
        </li>
        <li>
          <Link href="/studentlist/Sahadev">Sahadev</Link>
        </li>
      </ul>
    </div>
  );
};

export default StudentList;
