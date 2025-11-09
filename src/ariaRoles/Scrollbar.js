import React from 'react';
export const Scrollbar = () =>

<div>

    <div id="pi-label">Pi</div>
<div id="pi">
  3.14159265
</div>
<p aria-hidden="true">Leses som rullefelt</p>
<div
  role="scrollbar"
  aria-labelledby="pi-label"
  aria-controls="pi"
  aria-orientation="horizontal"
  aria-valuenow="0"
  aria-valuemin="0"
  aria-valuemax="100">
  <div id="thumb"></div>
</div>

</div>;