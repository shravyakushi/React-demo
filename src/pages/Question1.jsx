import React from "react";
import HomeButton from "../components/HomeButton";

// 1. React Props
function Student(props) {
    return (
        <div>
            <h3>React Props</h3>
            <p>Name: {props.name}</p>
            <p>Course: {props.course}</p>
        </div>
    );
}

// 2. Default Properties
function Welcome(props) {
    return (
        <div>
            <h3>Default Properties</h3>
            <p>Welcome, {props.name}</p>
        </div>
    );
}

Welcome.defaultProps = {
    name: "Guest"
};

// 3. this Operator
class Counter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
    }

    increment = () => {
        this.setState({
            count: this.state.count + 1
        });
    };

    render() {
        return (
            <div>
                <h3>this Operator</h3>
                <p>Count: {this.state.count}</p>
                <button onClick={this.increment}>
                    Increment
                </button>
            </div>
        );
    }
}

// Main Component
function Question1() {
    return (
        <div style={{ textAlign: "center", padding: "20px" }}>

            <h1>Question 1</h1>
            <h2>React Props, Default Properties and this Operator</h2>

            <Student name="Shravya" course="MCA" />

            <Welcome />

            <Counter />

            <HomeButton />

        </div>
    );
}

export default Question1;