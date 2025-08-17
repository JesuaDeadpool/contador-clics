import { useState } from "react";
import Swal from "sweetalert2";

const UseContador = () => {

    const [counter, setCounter] = useState(0);

    const decrementCounter = () => {
        if (counter === 0) return alerts("LLegaste a 0");

        setCounter(count => count - 1);
    }


    const resetCounter = () => {
        setCounter(count => count = 0);
    }


    const incrementCounter = () => {
        setCounter(count => count + 1);
    }

    const alerts = (message) => {
        Swal.fire({
            title: message,
            icon: "warning"
        });
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