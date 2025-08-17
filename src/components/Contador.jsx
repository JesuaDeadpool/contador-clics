
const Contador = () => {
    return (
        <div className="container my-auto">
            <div className="row">
                <div className="col-12">
                    <h2 className="fs-6">0</h2>
                </div>
                <div className="col-12 d-flex">
                    <button className="btn btn-success">-1</button>
                    <button className="btn btn-success">resetear</button>
                    <button className="btn btn-success">+1</button>
                </div>
            </div>
        </div>
    );
}

export default Contador; 