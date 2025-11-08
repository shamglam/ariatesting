import React from 'react';
import { useRouteError } from 'react-router-dom';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error); // Allow visibility in dev tools

  let message = 'Noe gikk galt.';
  if (error) {
    if (error.statusText) message = error.statusText;
    if (error.message) message = error.message;
  }

  return (
    <div role="alert" aria-live="assertive" style={{ padding: '1rem' }}>
      <h1>Oops!</h1>
      <p>Beklager, en uventet feil oppstod.</p>
      <pre style={{ whiteSpace: 'pre-wrap' }} aria-label="Feilmelding">{message}</pre>
      <a href="/" aria-label="Gå tilbake til startsiden">Til forsiden</a>
    </div>
  );
}