import React from 'react';

export default function Details(props) {


    return (

        <div>
            <h1>Details</h1>
            <ul>

                <li>{props.location.anns.description}</li>
                <li>{props.location.anns.title}</li>
                <img src={props.location.anns.image} alt="" />
                <li>{props.location.anns.phoneNumber}</li>

            </ul>
        </div>
    )

}