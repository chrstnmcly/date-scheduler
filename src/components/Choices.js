import React from 'react';
import { Link } from 'react-router-dom';

function Choices() {
  return (
    <div className="choices-container text-center mt-5">
      <h2>Choose what you want to do hehe</h2>
      <div className="row">
        <div className="col-md-3">
          <div className="card">
            <img src="/images/movice.jpg" className="card-img" alt="Movie Date" />
            <div className="card-body">
              <Link to="/schedule?choice=movie" className="btn btn-primary">Movie Date</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="/images/fancy.jpg" className="card-img" alt="Fancy Date" />
            <div className="card-body">
              <Link to="/schedule?choice=fancy" className="btn btn-primary">Fancy Date</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="https://media.giphy.com/media/C9x8gX02SnMIoAClXa/giphy.gif?cid=790b7611ex3m7d1glrvjlrza47c97wao2wg5w1w36kxty9z3&ep=v1_gifs_search&rid=giphy.gif&ct=g" className="card-img" alt="Gun Shooting Date" />
            <div className="card-body">
              <Link to="/schedule?choice=shooting" className="btn btn-primary">Range Shooting Date</Link>
            </div>
          </div>
        </div>
        <div className="col-md-3">
          <div className="card">
            <img src="/images/coffee.jpg" className="card-img" alt="Coffee Date" />
            <div className="card-body">
              <Link to="/schedule?choice=coffee" className="btn btn-primary">Coffee Date</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Choices;
