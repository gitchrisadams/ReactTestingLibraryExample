import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";
import Button from "./components/Button";

function App() {
    return (
        <>
            <Counter />
            <div>Todos:</div>
            <Todos />
            <Button label="click me please"></Button>
        </>
    );
}

export default App;
