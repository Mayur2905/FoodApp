import React from "react";

export default function Navbar() {
  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img src="..." className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">bulk of the card's content.</p>
            <div className="container w-100">
              <select className="m-2 h-100 bg-success rounded">
                {Array.from(Array(6), (e, i) => {
                  return (
                    <option key={i + 1} value={i + 1}>
                      {" "}
                      {i + 1}
                    </option>
                  );
                })}
              </select>
              <select className="m-2 h-100  bg-success rounded">
                <option value="half">Half</option>
                <option value="Full">Full</option>
              </select>
              <div className="d-inline h-100 fs-5">Total price</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}