import React from 'react'

const Placeholder = () => {
    return (
        <div className="card" aria-hidden="true" style={{ width: "18rem", height: "25rem" }}>
            <div className="h-50">
                {/* <img src="..." className="card-img-top" alt="." /> */}
            </div>
            <div className="card-body">
                <h5 className="card-title placeholder-glow">
                    <span className="placeholder col-6" />
                </h5>
                <p className="card-text placeholder-glow">
                    <span className="placeholder col-7" />
                    <span className="placeholder col-4" />
                    <span className="placeholder col-4" />
                    <span className="placeholder col-6" />
                    <span className="placeholder col-8" />
                </p>
                <a href="#" tabIndex={-1} className="card-link disabled placeholder col-6" />
            </div>
        </div>
    )
}

export default Placeholder