
export default function FormsPage() {
  return (

  <section aria-label="Eksempelskjema" aria-labelledby="form-title" aria-describedby="form-desc">
          <h2 id="form-title" aria-level="2">Tilgjengelig skjema</h2>
          <div id="form-desc" className="visually-hidden">
            Dette skjemaet demonstrerer alle innebygde kontroller med riktige etiketter og ARIA-attributter.
          </div>
          <form aria-labelledby="form-title" aria-describedby="form-desc">
            <div>
              <label htmlFor="text-input">Tekstfelt</label>
              <input id="text-input" name="text-input" type="text" aria-required="true" aria-placeholder="Skriv inn tekst" aria-label="Tekstfelt" aria-autocomplete="list" />
            </div>
            <div>
              <label htmlFor="password-input">Passord</label>
              <input id="password-input" name="password-input" type="password" aria-required="true" aria-label="Passordfelt" />
            </div>
            <div>
              <label htmlFor="email-input">E-post</label>
              <input id="email-input" name="email-input" type="email" aria-label="E-postfelt" />
            </div>
            <div>
              <label htmlFor="number-input">Tall</label>
              <input id="number-input" name="number-input" type="number" min="1" max="10" defaultValue={5} aria-label="Tallfelt" />
            </div>
            <div>
              <label htmlFor="range-input">Område <span aria-hidden="true">(fungerer dårlig i narrator)</span></label>
              <input id="range-input" name="range-input" type="range" min="0" max="100" aria-valuemin="0" aria-valuemax="100" aria-valuenow="50" aria-label="Områdekontroll" />
            </div>
            <div>
              <label htmlFor="textarea-input">Tekstområde</label>
              <textarea id="textarea-input" name="textarea-input" aria-multiline="true" aria-placeholder="Skriv her..." aria-label="Tekstområde" />
            </div>
            <div>
              <label htmlFor="select-input">Velg</label>
              <select id="select-input" name="select-input" aria-required="true" aria-label="Velg-felt" aria-multiselectable="false">
                <option value="">Velg...</option>
                <option value="1">Alternativ 1</option>
                <option value="2">Alternativ 2</option>
              </select>
            </div>
            <div>
              <fieldset>
                <legend>Avkrysningsbokser</legend>
                <input id="cb1" type="checkbox" name="cb" value="1" aria-checked="false" aria-label="Avkrysningsboks 1" />
                <label htmlFor="cb1">Avkrysningsboks 1</label>
                <input id="cb2" type="checkbox" name="cb" value="2" aria-checked="true" aria-label="Avkrysningsboks 2" />
                <label htmlFor="cb2">Avkrysningsboks 2</label>
              </fieldset>
            </div>
            <div>
              <fieldset>
                <legend>Radioknapper</legend>
                <input id="rb1" type="radio" name="rb" value="1" aria-checked="false" aria-label="Radioknapp 1" />
                <label htmlFor="rb1">Radioknapp 1</label>
                <input id="rb2" type="radio" name="rb" value="2" aria-checked="true" aria-label="Radioknapp 2" />
                <label htmlFor="rb2">Radioknapp 2</label>
              </fieldset>
            </div>
            <div>
              <label htmlFor="file-input">Fil</label>
              <input id="file-input" name="file-input" type="file" aria-label="Filfelt" />
            </div>
            <div>
              <label htmlFor="date-input">Dato</label>
              <input id="date-input" name="date-input" type="date" aria-label="Datofelt" />
            </div>
            <div>
              <label htmlFor="color-input">Farge</label>
              <input id="color-input" name="color-input" type="color" aria-label="Fargefelt" />
            </div>
            <div>
              <button type="submit" aria-pressed="false" aria-label="Send inn">Send inn</button>
              <button type="reset" aria-pressed="false" aria-label="Tilbakestill">Tilbakestill</button>
            </div>
            <div id="form-error" className="visually-hidden" aria-live="assertive">
              {/* Error messages will appear here */}
            </div>
          </form>
        </section>

  );
}