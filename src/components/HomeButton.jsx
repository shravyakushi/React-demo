import React from "react";
import { Link } from "react-router-dom";

function HomeButton() {

    return (
        <div style={{ textAlign: "center", margin: "20px" }}>
            <Link to="/">
                <button style={{
                    padding: "10px 25px",
                    backgroundColor: "#333",
                    color: "white",
                    border: "none",
                    borderRadius: "5px",
                    cursor: "pointer"
                }}>
                    Back to Home
                </button>
            </Link>
        </div>
    );
}

export default HomeButton;