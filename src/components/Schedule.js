import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Schedule() {
    const [dateTime, setDateTime] = useState('');
    const navigate = useNavigate();
    const location = useLocation();

    const queryParams = new URLSearchParams(location.search);
    const chosenChoice = queryParams.get('choice');

    const handleSchedule = () => {
        console.log(dateTime);
        navigate('/confirmation', { state: { dateTime, chosenChoice } });
    };

    return (
        <div className="container text-center mt-5">
            <img src="https://media.giphy.com/media/UslGBU1GPKc0g/giphy.gif?cid=790b7611f9esk0r1qb3g0n5bnb02nxauwptqv99ja0n0oh06&ep=v1_gifs_search&rid=giphy.gif&ct=g" alt="Sched Date" />
            <h2>Select a Date and Time</h2>
            {chosenChoice && <p>You chose: {chosenChoice} date</p>} {/* Display chosen choice */}
            <div className="row justify-content-center">
                <div className="col-md-6 col-sm-12">
                    <input 
                        type="datetime-local" 
                        onChange={(e) => setDateTime(e.target.value)} 
                        className="form-control mb-3" // Added margin-bottom for spacing
                    />
                    <button onClick={handleSchedule} className="btn btn-primary btn-block">Confirm Date</button>
                </div>
            </div>
        </div>
    );
}

export default Schedule;
