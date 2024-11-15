import React from "react";

const StudentDetail = ({ params }) => {
  return (
    <div>
      <h1 className="py-6 text-center text-3xl font-extrabold text-pink-800">
        Student Details Page
      </h1>
      <h2 className="text-center font-semibold text-slate-700 text-lg">Name: {params.student} </h2>
    </div>
  );
};

export default StudentDetail;
