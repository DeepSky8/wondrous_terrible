import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import randomDigit from "../../functions/randomDigit";
import strung from "../../functions/strung";
import {
    hyperdriveDistance,
    hyperdriveProcess,
    hyperdriveRoll,
    hyperdriveRollThrow,
    hyperdriveTable,
} from "../../objects/hyperdriveObjects";
import NextBar from "../navBar/NextBar";

const Hyperdrive = () => {
    const { change, challenge, timeline } = useParams()
    const backLink = strung(timeline.split('['), '/')
    const [rollNumber, setRollNumber] = useState(0)
    const [rollResult, setRollResult] = useState('')

    const hyperDie = () => {
        if (rollResult.length === 0) {
            const roll = randomDigit(7, 1)
            setRollNumber(roll)

            setRollResult(
                hyperdriveTable[change].includes(roll)
                    ?
                    'SUCCESS'
                    :
                    'FAILURE'

            )
        }

    }

    return (
        <div className="hyperdriveDisplay-container">


            <div className="header-container">
                <div className="leftBlock">
                    <div className="leftTop"></div>
                    <div className='backLink'><Link to={'/hyperdrive/' + change + '/' + timeline}>←</Link></div>
                    <div className="leftBottom"></div>
                </div>
                <div className="centerBlock">
                    <h3>{hyperdriveRollThrow[challenge]}</h3>

                </div>
                <div className="rightBlock">

                </div>
            </div>


            {
                challenge === 'bowlThrow' &&
                <div className="bodyText">
                    <p>{hyperdriveDistance[change]}</p>
                    <p>{hyperdriveProcess.test}</p>
                    <p>{hyperdriveProcess.lands + hyperdriveProcess.success}</p>
                    <p>{hyperdriveProcess.bounces + hyperdriveProcess.failure}</p>
                </div>
            }

            {
                challenge === 'rollApp' &&
                <div className="bodyText">
                    <div className="roll-container">
                        <span className="rollButton">
                            <button
                                onClick={() => { hyperDie() }}
                            >Roll the Hyper-Die</button>
                        </span>
                        <span className="rollResult-container">
                            <p className="rollResult" >{rollNumber}</p>
                        </span>

                    </div>

                    {
                        rollResult.length > 0 &&
                        <p className="center">{rollResult}</p>
                    }


                    {
                        rollResult.length === 0 &&
                        <p className="center">{hyperdriveRoll[change]}</p>
                    }



                    {
                        rollResult === 'SUCCESS' &&
                        <p className="center">{hyperdriveProcess.the + hyperdriveProcess.success}</p>
                    }

                    {
                        rollResult === 'FAILURE' &&
                        <p className="center">{hyperdriveProcess.things + hyperdriveProcess.failure}</p>
                    }
                </div>

            }

            <NextBar
                styling='italic'
                goTo={backLink}
                linkText='(Return to realSpace)'
            />


        </div>
    )
}

export default Hyperdrive
