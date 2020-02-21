import React from 'react';
const SmurfMaker = (props) => {
    console.log(props.smurf)
    return (
        <div className="smurf">
            <p> Smurf Name: {props.smurf.name}</p>
            <p>Age: {props.smurf.age}</p>
            <p>Height: {props.smurf.height}</p>
        </div>
    );
};

export default SmurfMaker;