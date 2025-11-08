import React, { useState } from 'react';

interface LiveRegionState {
  polite: string;
  assertive: string;
  off: string;
  log: string[];
  status: string;
  timer: number;
}

const initialState: LiveRegionState = {
  polite: 'Opprinnelig høflig melding.',
  assertive: 'Opprinnelig påtrengende melding.',
  off: 'Dette vil ikke bli annonsert (aria-live="off").',
  log: ['Logg initialisert.'],
  status: 'Status klar.',
  timer: 0,
};

// Utility to generate timestamped messages
const stamp = () => new Date().toLocaleTimeString();

export const AriaLiveDemo: React.FC = () => {
  const [state, setState] = useState<LiveRegionState>(initialState);

  const updatePolite = () => setState((s: LiveRegionState) => ({ ...s, polite: `Høflig oppdatering kl ${stamp()}` }));
  const updateAssertive = () => setState((s: LiveRegionState) => ({ ...s, assertive: `Påtrengende oppdatering kl ${stamp()}` }));
  const updateOff = () => setState((s: LiveRegionState) => ({ ...s, off: `Stille (off) oppdatering kl ${stamp()}` }));
  const appendLog = () => setState((s: LiveRegionState) => ({ ...s, log: [...s.log, `Loggoppføring ${s.log.length + 1} kl ${stamp()}`] }));
  const updateStatus = () => setState((s: LiveRegionState) => ({ ...s, status: `Status endret kl ${stamp()}` }));
  const tickTimer = () => setState((s: LiveRegionState) => ({ ...s, timer: s.timer + 1 }));

  return (
    <section aria-label="Full demonstrasjon av ARIA live-regioner">
      <h2>Demonstrasjon av ARIA live-regioner</h2>
      <p>Knappene nedenfor utløser oppdateringer av ulike live-regioner og viser alle vanlige aria-live-atferder.</p>

  <div className="aria-live-grid">
        {/* Polite region */}
        <div>
          <h3>Høflig region (aria-live="polite")</h3>
          <div aria-live="polite" aria-atomic="false">{state.polite}</div>
          <button onClick={updatePolite}>Oppdater høflig</button>
        </div>

        {/* Assertive region */}
        <div>
          <h3>Påtrengende region (aria-live="assertive")</h3>
          <div aria-live="assertive" aria-atomic="true">{state.assertive}</div>
          <button onClick={updateAssertive}>Oppdater påtrengende</button>
        </div>

        {/* Off region */}
        <div>
          <h3>Av-region (aria-live="off")</h3>
          <div aria-live="off">{state.off}</div>
          <button onClick={updateOff}>Oppdater av (ingen opplesning)</button>
        </div>

        {/* Log region using role=log (treated like live polite additions) */}
        <div>
          <h3>Loggregion (role="log" aria-live="polite" aria-relevant="additions")</h3>
          <div role="log" aria-live="polite" aria-relevant="additions" aria-atomic="false">
            {state.log.map((entry, i) => (
              <div key={i}>{entry}</div>
            ))}
          </div>
          <button onClick={appendLog}>Legg til loggoppføring</button>
        </div>

        {/* Status region (role=status implicit aria-live=polite) */}
        <div>
          <h3>Statusregion (role="status" implicit polite)</h3>
          <div role="status" aria-atomic="true">{state.status}</div>
          <button onClick={updateStatus}>Oppdater status</button>
        </div>

        {/* Timer region (role=timer) updates number */}
        <div>
          <h3>Tidsmålerregion (role="timer" aria-live="off" + eksplisitt høflig speil)</h3>
          <div className="aria-live-timer-row">
            <div role="timer" aria-live="off">Tidsmåler rå: {state.timer}</div>
            <div aria-live="polite" aria-relevant="text" aria-atomic="true">Tidsmåler annonsert: {state.timer}</div>
          </div>
          <button onClick={tickTimer}>Øk tidsmåler</button>
        </div>
      </div>

      {/* Combined region demonstrating aria-relevant flags */}
  <div className="aria-live-combined">
  <h3>Kombinert relevant-demo (aria-live="polite" aria-relevant="additions removals text")</h3>
        <DynamicRelevant />
      </div>
    </section>
  );
};

// Separate component for dynamic relevant changes
const DynamicRelevant: React.FC = () => {
  const [items, setItems] = useState<string[]>(['Alfa', 'Bravo']);
  const addItem = () => setItems(arr => [...arr, `Element ${arr.length + 1}`]);
  const removeItem = () => setItems(arr => arr.slice(0, -1));
  const replaceText = () => setItems(arr => arr.map(v => v.toUpperCase()));

  return (
    <div>
  <div aria-live="polite" aria-relevant="all" aria-atomic="false" className="aria-live-relevant-box">
        {items.map((i, idx) => <div key={idx}>{i}</div>)}
      </div>
  <div className="aria-live-relevant-actions">
  <button onClick={addItem}>Legg til element</button>
  <button onClick={removeItem} disabled={items.length === 0}>Fjern element</button>
  <button onClick={replaceText}>Transformer tekst</button>
      </div>
    </div>
  );
};

export default AriaLiveDemo;
