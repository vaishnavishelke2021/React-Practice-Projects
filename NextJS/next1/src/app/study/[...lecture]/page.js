import React from "react";

const Lecture = ({ params }) => {
  console.log(params);
  return (
    <div className="text-center font-semibold text-lg my-10">
      Hey this are route segments :
      <ul className="mt-6">
        {params.lecture.map((item, index) => (
          <li key={index}>{index+1} : {item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Lecture;
