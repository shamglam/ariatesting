import React from 'react';
export const Tooltip = () => <div>
<h3 lang="en">Tooltip Role Example <span aria-hidden="true">Leses ikke som noe spesielt</span></h3>
<label for="password">Tooltip role demo:</label>
<input aria-describedby="passwordrules" id="password" type="password" />
<div role="tooltip" id="passwordrules">
  <p>Password Rules:</p>
  <ul>
    <li>Minimum of 8 characters</li>
    <li>
      Include at least one lowercase letter, one uppercase letter, one number
      and one special character
    </li>
    <li>Unique to this website</li>
  </ul>
</div>

</div>;
