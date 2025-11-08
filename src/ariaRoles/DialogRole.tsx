import React from 'react';
export const DialogRole = () => <div role="dialog">
  <h2>Dialog Title</h2>
  <p>Dialog content goes here.</p>

   <div id="InfoText" role="document" tabindex="0">
    <p>We are inside document role .


        the document role informs assistive technologies to the reading context back to a reading mode: The document role tells assistive technologies with reading or browse modes to use the document mode to read the content contained within this element.
    </p>
  </div>
  <button>Close</button>
</div>;
