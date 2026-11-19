import React from "react";
import { Link } from "react-router-dom";

function Home() {

    return (
        <div style={{
            textAlign: "center",
            padding: "30px",
            fontFamily: "Arial",
            color: "black"
        }}>

            <h1>React Assignment</h1>

            <h3>Welcome to My React Assignment</h3>

            <br />

            <Link to="/question1">
                <button>Question 1 - Props and Default Properties</button>
            </Link>

            <br /><br />

            <Link to="/question2">
                <button>Question 2 - Counter Application</button>
            </Link>

            <br /><br />

            <Link to="/question3">
                <button>Question 3 - Password Checking</button>
            </Link>

            <br /><br />

            <Link to="/question4">
                <button>Question 4 - IPL Teams and Players</button>
            </Link>

        </div>
    );
}

export default Home;