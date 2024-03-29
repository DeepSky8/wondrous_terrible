import React from "react";
import { Link } from "react-router-dom";

const NewContinue = () => {
    return (
        <div>
            <div className="newContinue-container">
                <span className="newContinue-link">
                    <Link to="/newSpecies/Biology">New Species</Link>
                </span>
                <span className="newContinue-link">
                    <Link to="/explore/">Explore Space</Link>
                </span>
            </div>

            <hr />
        </div>

    )
}

export default NewContinue