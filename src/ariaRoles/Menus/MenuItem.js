import React from 'react';
export const MenuItem = ({ label="Default", explain='', disabled=false, hasPopup=false, link="https://www.vg.no " }) => {

    const [openedPopup, setOpenedPopup] = React.useState(false);
    const handleClick = (e) => {
        if (disabled || hasPopup) {
            e.preventDefault();
        }
       if(hasPopup){
           setOpenedPopup(!openedPopup);
       } else {
           setOpenedPopup(false);
         
       }
    };

    const handleKeyPress = (e) => {
        if (disabled && (e.key === 'Enter' || e.key === ' ')) {
            e.preventDefault();
        }
         if(hasPopup && (e.key === 'Enter' || e.key === ' ')){
              e.preventDefault();
           setOpenedPopup(!openedPopup);
           


       }
    };

    return(
         <div>
           <a role="menuitem" onClick={handleClick} onKeyDown={handleKeyPress} href={link} aria-disabled={disabled} aria-haspopup={hasPopup}>{label}
           </a>
           <span aria-hidden="true">{explain}</span>

           {hasPopup && openedPopup && 
             <div role="menu" aria-label="Undermeny">
               <MenuItem     label="Undermeny element 1" />
               <MenuItem label="Undermeny element 2" /> 
             </div>
           }
         </div>
         
    );

}
