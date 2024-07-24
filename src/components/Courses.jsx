import React from "react";
import { useLocation } from "react-router-dom";

const Courses = () => {
  const location = useLocation();
  const uni = location.state;
  return (
    <>
      <h1>{uni.name} Courses</h1>
      <ul className="list-group" style={{maxWidth: "40%"}}>
        {
            uni.courses.map((course, index)=>{
                return(
                    <li className="list-group-item"><h4 className="display-7">{course}</h4></li>
                )
            })
        }
      </ul>
    </>
  );
};

export default Courses;
