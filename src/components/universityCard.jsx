import React from "react";
import { Link } from "react-router-dom";

const UniversityCard = ({uni, id}) => {
    return (
        <>
            <div className="col-md-3 card" style={{ margin: '1px' }}>
                <div className="card-body">
                    <h2>{uni.name}</h2>
                    <h3>Location: {uni.location}</h3>
                    <Link to="/courses" state={uni} className="btn btn-info">View Course</Link>
                </div>
            </div>
        </>
    )
}

export default UniversityCard