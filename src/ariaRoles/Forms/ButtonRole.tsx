import React from 'react';
export const ButtonRole = () => {

    const [isPressed, setIsPressed] = React.useState(false);
    const togglePressed = (event) => {
        setIsPressed((prev) => !prev);
    }
    return (
        <div onClick={togglePressed} role="button" tabIndex="0" aria-pressed={isPressed}>
            dette er en falsk knapp - 
            du må faktisk implementere click handlere og styre aria-pressed og i tillegg sette tabb indeks for at den skal tabbes inn - B knappen finner den
        <span aria-hidden="true"> leses: "av og på knapp - {isPressed ? 'på' : 'av'}"</span>

        </div>

    );
};
