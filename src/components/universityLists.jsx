import React from "react";
import { universities } from "../../public/universities";
import UniversityCard from "./universityCard";


const UniversityList = () =>{
    let c = 12
    return(
        <>
         <h1>Universities</h1>
         <div className="row justify-content-center">
            {
                universities.map((uni, index)=>{
                    return(
                        <UniversityCard uni = {uni} id={index}/>
                    )
                })
            }
         </div>
        </>
    )
}

export default UniversityList;