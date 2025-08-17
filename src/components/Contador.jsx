import UseContador from "../hooks/UseContador";

const Contador = () => {

    const {
        decrementCounter,
        resetCounter,
        incrementCounter,
        counter,
        setCounter
    } = UseContador();


    return (
        <div className="container vh-100 p-5">
            <div className="row mx-auto">
                <div className="col-12">
                    <h2 className="texto-contador text-center">{counter}</h2>
                </div>
                <div className="col-12 d-flex justify-content-center gap-4 ">
                    <button className="btn btn-primary fs-3 fw-bold" onClick={decrementCounter}>-1</button>
                    <button className="btn btn-danger fs-3 fw-bold" onClick={resetCounter}>Resetear</button>
                    <button className="btn btn-primary fs-3 fw-bold" onClick={incrementCounter}>+1</button>
                </div>
            </div>
        </div>
    );
}

export default Contador; 