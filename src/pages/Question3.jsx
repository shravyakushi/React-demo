import React, { useState } from "react";
import HomeButton from "../components/HomeButton";

function Question3() {

    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    function checkPassword() {

        if (password === "shravya") {
            setMessage("Password is Correct!");
        }
        else {
            setMessage("Password is Incorrect!");
        }
    }

    return (
        <div style={{
            textAlign: "center",
            padding: "30px",
            fontFamily: "Arial",
            color: "black"
        }}>

            <h2>Password Checking Application</h2>

            <input
                type="password"
                placeholder="Enter Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />

            <br /><br />

            <button onClick={checkPassword}>
                Check Password
            </button>

            <h3>{message}</h3>

            <HomeButton />

        </div>
    );
}

export default Question3;