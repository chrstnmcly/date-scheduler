// // src/components/Confirmation.js
// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import axios from 'axios';

// function Confirmation() {
//     const { state } = useLocation();
//     const dateTime = state?.dateTime || 'not selected';

//     useEffect(() => {
//         const sendNotifications = async () => {
//             const email = 'christianmaclay@gmail.com'
//             const phoneNumber = '+639663751613'
//             const subject = 'Date Confirmation';
//             const message = `See you on ${dateTime}`;

//             try {
//                 // await axios.post('http://localhost:5000/send-email', {
//                 //     to: email,
//                 //     subject: subject,
//                 //     text: message,
//                 // });

//                 await axios.post(`${process.env.REACT_APP_SERVER}/send-sms`, {
//                     to: phoneNumber,
//                     message: message,
//                 });

//                 alert('Notifications sent successfully!');
//             } catch (error) {
//                 console.error('Error sending notifications:', error);
//                 alert('Failed to send notifications');
//             }
//         };

//         sendNotifications();
//     }, [dateTime]);

//     return (
//         <div className="text-center mt-5">
//             <h2>Confirmation</h2>
//             <p>See you on this {dateTime}</p>
//         </div>
//     );
// }

// export default Confirmation;

import React from 'react';
import { useLocation } from 'react-router-dom';

function Confirmation() {
    const { state } = useLocation();
    const dateTime = state?.dateTime || 'not selected';
    const chosenChoice = state?.chosenChoice || 'not selected';

    // Extract the date and time from the dateTime string
    const dateObject = new Date(dateTime);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = dateObject.toLocaleDateString(undefined, options); // Format the date
    const time = dateObject.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Format the time

    return (
        <div className="text-center mt-5">
            <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExcDEyOWQ4ZjZjdmh4OXdzM2Qzb2ZkdTh2aHBubGNubXQ2eml2bW8ydSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/lck9f0L8jPjRtkigYy/giphy.gif" alt="Confirmation" />
            <h2>Confirmation</h2>
            <p className="confirmation-message">
                See you on {date} to do the {chosenChoice} date! at {time} mwua! IM SERIOUS ON THIS DATE HA HAHAHA, PUT IT IN YOUR CALENDAR
            </p>
        </div>
    );
}

export default Confirmation;
