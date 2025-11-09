import React, { useEffect, useRef, useState } from 'react';

// DialogRole: now includes its own trigger button that opens an accessible dialog.
// The dialog provides focus management: focus moves into dialog when opened and returns to trigger on close.
// ESC key and Close button both dismiss the dialog.
export const DialogRole: React.FC = () => {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const lastFocusedRef = useRef<Element | null>(null);

  const openDialog = () => setOpen(true);
  const closeDialog = () => {
    setOpen(false);
    // restore focus to trigger
    requestAnimationFrame(() => triggerRef.current?.focus());
  };

  // Move focus to first focusable element in dialog after it opens
  useEffect(() => {
    if (open && dialogRef.current) {
      const focusable = dialogRef.current.querySelector<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      (focusable || dialogRef.current).focus();
    }
  }, [open]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!open) return;
    if (e.key === 'Escape') {
      e.preventDefault();
      closeDialog();
      return;
    }
    if (e.key === 'Tab' && dialogRef.current) {
      const focusable = getFocusable(dialogRef.current);
      if (focusable.length === 0) {
        e.preventDefault();
        dialogRef.current.focus();
        return;
      }
      const currentIndex = focusable.indexOf(document.activeElement as HTMLElement);
      let nextIndex = currentIndex;
      if (e.shiftKey) {
        nextIndex = currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1;
      } else {
        nextIndex = currentIndex === focusable.length - 1 ? 0 : currentIndex + 1;
      }
      e.preventDefault();
      focusable[nextIndex].focus();
    }
  };

  // Collect focusable elements inside dialog
  const getFocusable = (root: HTMLElement): HTMLElement[] => {
    const selectors = [
      'button:not([disabled])',
      'a[href]:not([disabled])',
      'input:not([disabled])',
      'select:not([disabled])',
      'textarea:not([disabled])',
      '[tabindex]:not([tabindex="-1"])'
    ];
    return Array.from(root.querySelectorAll<HTMLElement>(selectors.join(',')));
  };

  // Prevent focus from leaving the dialog via programmatic focus (focusin event)
  useEffect(() => {
    if (!open) return;
    const handleFocusIn = (e: FocusEvent) => {
      if (!dialogRef.current) return;
      if (dialogRef.current.contains(e.target as Node)) {
        lastFocusedRef.current = e.target as Element;
        return;
      }
      // Redirect focus back into dialog if focus tried to move outside
      const focusable = getFocusable(dialogRef.current);
      (focusable[0] || dialogRef.current).focus();
      e.preventDefault();
    };
    document.addEventListener('focusin', handleFocusIn, true);
    return () => document.removeEventListener('focusin', handleFocusIn, true);
  }, [open]);

  // Optional: make siblings inert (simple aria-hidden approach for demo)
  useEffect(() => {
    const root = document.getElementById('app-root');
    if (!root) return;
    if (open) {
      // mark non-dialog descendants as aria-hidden
      Array.from(root.children).forEach(child => {
        if (dialogRef.current && dialogRef.current.contains(child)) return;
        if (child.id === 'demo-dialog') return;
        if (child.getAttribute('aria-hidden') === 'true') return;
        child.setAttribute('data-prev-aria-hidden', child.getAttribute('aria-hidden') || '');
        child.setAttribute('aria-hidden', 'true');
      });
    } else {
      Array.from(root.children).forEach(child => {
        const prev = child.getAttribute('data-prev-aria-hidden');
        if (prev !== null) {
          if (prev === '') child.removeAttribute('aria-hidden');
          else child.setAttribute('aria-hidden', prev);
          child.removeAttribute('data-prev-aria-hidden');
        }
      });
    }
  }, [open]);

  return (
    <div>
      <button
        type="button"
        ref={triggerRef}
        onClick={openDialog}
        aria-haspopup="dialog"
        aria-expanded={open ? true : false}
        aria-controls="demo-dialog"
        className="dialog-trigger"
      >
        Åpne dialog
      </button>
      {open && (
        <div
          id="demo-dialog"
          ref={dialogRef}
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
          onKeyDown={handleKeyDown}
          className="dialog-surface"
          tabIndex={-1}
        >
          <h2 id="dialog-title">Dialog Title</h2>
          <p>Dialog content goes here.</p>
          <div id="InfoText" role="document" tabIndex={0} className="dialog-document">
            <p>
              dette viser en dialogvindu, det er viktig at dialogen har en fokusfelle, for å ikke
              forvirre brukeren. fordi når en beveger seg ut av dialogen så vil skjermleseren lese opp
              hvilken side man er på som om man hadde lastet den inn første gang, men i tillegg vil den 
              si hvilket landemerke man er på, og hva har fokus.
              
            </p>
          </div>
          <div className="dialog-actions">
            <button type="button" onClick={closeDialog} autoFocus>
              Lukk dialog
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
