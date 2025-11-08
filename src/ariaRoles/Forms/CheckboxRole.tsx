import React from 'react';
export const CheckboxRole = () => {

        const [isChecked, setIsChecked] = React.useState(false);
        const toggleCheckbox = () => {
            setIsChecked(!isChecked);
        };
        return (
            <div

                role="checkbox"
                tabIndex="0"
                aria-checked={isChecked}
                onClick={toggleCheckbox}
            >

                Dette er en falsk avkrysningsboks
                 <span aria-hidden="true"> leses: "avkrysningsboks - {isChecked ? 'avmerket' : 'ikke avmerket'}"</span>
               
            </div>
        );
    };
