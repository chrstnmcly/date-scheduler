import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-container">
      <img src="/images/cat-hello.webp" alt="hehe reload mo ulit" className="home-image" />
      <h1 className="display-1 text-center">Hello my pretty girl!!!</h1>
      <Link to="/question" className="btn btn-primary">Please click me bebe</Link>
    </div>
  );
}


export default Home;
