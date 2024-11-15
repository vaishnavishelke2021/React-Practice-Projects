import Link from "next/link";
import React from "react";

const StudentList = () => {
  const names = ["Yudhishthir", "Bheem", "Arjun", "Nakul", "Sahadev"];
  return (
    <div>
      <h1 className="py-6 text-center text-3xl font-extrabold text-slate-800">
        Student List Page
      </h1>

      <ul className="flex justify-center  items-center  flex-col gap-2 font-semibold text-slate-700 text-lg list-disc">
        {names.map((name, i) => {
          return (
            <li key={i}>
              <Link href={`/studentlist/${name}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default StudentList;
