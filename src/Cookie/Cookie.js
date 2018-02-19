import React from 'react';
import './Cookie.css';

const cookie = (props) => {
    return (
        <div className="Cookie">
            <h2>{props.name}</h2>
            <p>{props.amount} piece{props.amount > 1 ? "s" : ""}</p>
            <p>{props.price} EUR</p>
            <p>Subtotal: {(props.amount * props.price).toFixed(2)} EUR</p>
            <button onClick={props.click}>Add cookies</button>
        </div>
    )
}

export default cookie;