import React from "react";
import { useParams } from "react-router-dom";
import { speciesQuestions } from "../../objects/speciesObjects";

const SpeciesDisplay = () => {
    const { step } = useParams();
    const info = speciesQuestions[step]


    return (
        <div className="species-display-container">
            <h3>{info.header}</h3>
            <p>{info.step1}</p>
            <p>{info.step2}</p>
            <p>{info.step3.length > 0 ? info.step3 : ""}</p>
            <p className="italic">{info.footer.length > 0 ? info.footer : ""}</p>
        </div>
    )
}

export default SpeciesDisplay