import { useState } from "react";

const UseContador = () => {

    const [counter, setCounter] = useState(0);

    const decrementCounter = () => {
        if (Number(counter) == 0) return;

        setCounter(count => count - 1);
    }


    const resetCounter = () => {
        setCounter(count => count = 0);
    }


    const incrementCounter = () => {
        setCounter(count => count + 1);
    }

    return {
        decrementCounter,
        resetCounter,
        incrementCounter,
        counter,
        setCounter
    }


}

export default UseContador; 