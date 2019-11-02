import React from "react";
import "./App.css";
import Counter from "./components/Counter";
import Todos from "./components/Todos";

function App() {
    return (
        <>
            <Counter />
            <div>Todos:</div>
            <Todos />
        </>
    );
}

export default App;
