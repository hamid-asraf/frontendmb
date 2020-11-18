import React from 'react';
import './Home.css';
import { useHistory } from 'react-router-dom';

export default function Home() {
    const history = useHistory();
    return (
        <div className="centered">
            <img style={{width: "100px", height: "100px"}} src="https://i.pinimg.com/originals/25/f0/6c/25f06cfab35657a2bae4013541ccbfa6.jpg" />
            <h2 style={{color:"#ff2a82"}}>Thank You for Reaching Out to Me</h2>
            <h3>I am Hamid Asraf</h3>
            <button type="button" className="detailButton" onClick={() => history.push('/details')}>Get Detail</button>
        </div>
    )
}
