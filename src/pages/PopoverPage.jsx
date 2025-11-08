export default function PopoverPage() {
  return (
        <section lang="en" aria-label="This is read by the screen reader when entering the popover section">
          <h2>Popover-demonstrasjon <span aria-hidden="true">(aria label is set on the section tag, but this text isn't read by screen reader because it is in aria-hidden)</span></h2>
          {/* Auto popover */}
          <div>
            <button popovertarget="autoPopover" popovertargetaction="show">show automatic popover</button>
            <button popovertarget="autoPopover" popovertargetaction="hide">Hide automatic popover</button>
            <button popovertarget="autoPopover" popovertargetaction="toggle">toggle autmatic popover</button>
            <div id="autoPopover" role="alert" popover="auto" aria-label="label for automatic popover">this is the content of the popover .</div>
          </div>
          {/* Manual popover */}
          <div>
            <button popovertarget="manualPopover" popovertargetaction="show">Vis manuell popover</button>
            <button popovertarget="manualPopover" popovertargetaction="hide">Skjul manuell popover</button>
            <button popovertarget="manualPopover" popovertargetaction="toggle">Veksle manuell popover</button>
            <div id="manualPopover" role="dialog" popover="manual" aria-label="Innhold for manuell popover">Dette er en manuell popover.</div>
          </div>
        </section>
  );
}   