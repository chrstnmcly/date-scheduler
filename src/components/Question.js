import React from 'react';
import { Link } from 'react-router-dom';

function Question() {
  return (
    <div className="home-container">
      <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExeXVnOWJyMGsxMGNlaXVsMGptOWl2NzZrZmt6N3ZvcHF6azBrZGQxZiZlcD12MV9naWZzX3NlYXJjaCZjdD1n/9uwnYUDw342pq/giphy.gif" 
      alt="hehe reload mo ulit" className="home-image" />
      <h2>Can you be my date?</h2>
      <Link to="/choices" className="btn btn-primary">Yes</Link>
    </div>
  );
}

export default Question;
