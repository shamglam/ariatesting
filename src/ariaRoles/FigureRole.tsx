import React from 'react';
export const FigureRole = () => <div role="figure" aria-labelledby="caption">
  <img src="image.png" alt="Beskrivelse av bildet" />
  <p id="caption">Figure 1: Bildetekst</p>
  <p aria-hidden="true">leses: "-Grafikk"</p>
</div>;
