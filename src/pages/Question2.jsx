import React, { useState } from "react";
import HomeButton from "../components/HomeButton";

function Question2() {

    const [count, setCount] = useState(0);

    function increment() {
        setCount(count + 1);
    }

    function decrement() {
        setCount(count - 1);
    }

    function reset() {
        setCount(0);
    }

    return (
        <div style={styles.container}>


            <h2 style={styles.heading}>Counter Application</h2>

            <h2 style={styles.count}>{count}</h2>

            <p style={styles.label}>Current Count</p>

            <div>
                <button style={styles.decrement} onClick={decrement}>
                    − &nbsp; Decrement
                </button>

                <button style={styles.increment} onClick={increment}>
                    + &nbsp; Increment
                </button>
            </div>

            <button style={styles.reset} onClick={reset}>
                Reset
            </button>

            <HomeButton />

        </div>
    );
}

const styles = {

    container: {
        width: "740px",
        maxWidth: "100%",
        boxSizing: "border-box",
        textAlign: "center",
        padding: "18px 25px 12px",
        backgroundColor: "#fafafa",
        fontFamily: "Arial, sans-serif",
        margin: "0 auto"
    },

    heading: {
        fontSize: "24px",
        fontWeight: "bold",
        color: "black",
        margin: "0 0 12px"
    },

    count: {
        color: "green",
        fontSize: "23px",
        margin: "0 0 8px"
    },

    label: {
        color: "#777",
        fontSize: "12px",
        margin: "0 0 8px"
    },

    decrement: {
        backgroundColor: "#ff3838",
        color: "white",
        border: "none",
        borderRadius: "25px",
        padding: "10px 20px",
        margin: "0 3px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "13px"
    },

    increment: {
        backgroundColor: "#00a844",
        color: "white",
        border: "none",
        borderRadius: "25px",
        padding: "10px 20px",
        margin: "0 3px",
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "13px"
    },

    reset: {
        width: "100%",
        boxSizing: "border-box",
        padding: "9px",
        marginTop: "8px",
        border: "1px solid #ddd",
        borderRadius: "25px",
        backgroundColor: "transparent",
        color: "#555",
        cursor: "pointer",
        fontSize: "13px"
    }
};

export default Question2;