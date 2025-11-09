
import React from 'react';
export const Toolbar = () => {

    return(
    
    <div> 
        <h3 lang='en'>Toolbar role <span aria-hidden="true">Leses som</span></h3>
          <div className="format" role="toolbar" aria-label="Text Formatting">   
        <div className="group characteristics">
            <button type="button" className="item bold popup" aria-pressed="false" value="bold" tabindex="0">
                <span className="fas fa-bold" aria-hidden="true"></span>
                <span className="popup-label">Bold</span>
            </button>
            <button type="button" className="item italic popup" aria-pressed="false" value="italic" tabindex="-1">
                <span className="fas fa-italic" aria-hidden="true"></span>
                <span className="popup-label">Italic</span>
            </button>
            <button type="button" className="item underline popup" aria-pressed="false" value="underline" tabindex="-1">
                <span className="fas fa-underline" aria-hidden="true"></span>
                <span className="popup-label">Underline</span>
            </button>
        </div>
       
            
        </div>
 </div>

    );
} 
