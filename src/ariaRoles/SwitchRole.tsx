import React from 'react';
export const SwitchRole = () => <div><button
  type="button"
  role="switch"
  aria-checked="true"
  id="speakerPower"
  class="switch">
  <span aria-hidden="true">off</span>
  <span aria-hidden="false">on</span>
</button>
<label for="speakerPower" class="switch">Speaker power</label></div>;
