import React from "react";
import HomeButton from "../components/HomeButton";

function Question4() {

    function openTeam(team) {
        window.location.href = "/teams/Team.html?team=" + team;
    }

    return (
        <div style={{
            textAlign: "center",
            padding: "30px",
            fontFamily: "Arial",
            color: "black"
        }}>

            <h2>IPL Teams</h2>

            <button onClick={() => openTeam("rcb")}>
                RCB
            </button>

            <br /><br />

            <button onClick={() => openTeam("csk")}>
                CSK
            </button>

            <br /><br />

            <button onClick={() => openTeam("mi")}>
                Mumbai Indians
            </button>

            <br /><br />

            <button onClick={() => openTeam("dc")}>
                Delhi Capitals
            </button>

            <HomeButton />

        </div>
    );
}

export default Question4;