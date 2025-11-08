import React from 'react';
import { Banner } from '../ariaRoles/Tested/Banner';
import { FigureRole } from '../ariaRoles/FigureRole';
import { MathRole } from '../ariaRoles/Tested/MathRole';
import { ImgRole } from '../ariaRoles/ImgRole';
import { TableRole } from '../ariaRoles/TableRole';

// ContentPage: moved media/banner content from App layout.
// Provides its own landmark semantics via a section.
const ContentPage: React.FC = () => {
  return (


    <div>

        {/* Headings 1-6 */}
        <section lang="en" aria-label="Overskriftsdemo" aria-labelledby="headings-demo-title">
          <h2 lang="en" id="headings-demo-title">This is read by the screen reader 
            when entering this section because this is using aria labelled, we are inside a section tag,
            and a section si a landmark</h2>
          <h1>Heading level 1</h1>
          {/* aria-level is generally used only when role="heading"; native h1-h6 not needed. */}
          <h2>Overskrift 2</h2>
          <h3>Overskrift 3</h3>
          <h4>Overskrift 4</h4>
          <h5>Overskrift 5</h5>
          <h6>Overskrift 6</h6>
          {/* Use a div with role heading to avoid TS typing conflict on aria-level number */}
          {/* Provide aria-level as number literal to satisfy accessibility typing */}
          {/* Use span with role heading and static aria-level string to avoid JSX lint complaining about expression */}
          {/* Removed custom role=heading demo to avoid aria-level typing conflicts */}
        </section>

      
    
    <section aria-labelledby="content-title" aria-describedby="content-desc">
      <h2 id="content-title">Innhold</h2>
      <p id="content-desc" className="visually-hidden">Flyttet banner og bildeinnhold til egen rute.</p>
      <Banner />
      <figure>
        <img
          src="https://cdn.pixabay.com/photo/2025/11/05/20/57/monastery-9939590_1280.jpg"
          width={300}
          alt="pixabay bilde 2"
        />
        <figcaption>leses: "pixapay bilde 2- Grafikk"</figcaption>
      </figure>
      <FigureRole />

 <ImgRole />


      <MathRole />
    </section>

    <section aria-label="tabeller">
            <table aria-label="Eksempeldatatabell" aria-rowcount="3" aria-colcount="4" aria-describedby="table-desc" aria-sort="none">
                      <caption id="table-desc">En tabell som viser eksempeldata med ARIA-attributter. Leses i scan modus </caption>
                      <thead>
                        <tr>
                          <th scope="col" aria-colindex="1" aria-sort="ascending">Navn</th>
                          <th scope="col" aria-colindex="2">Alder</th>
                          <th scope="col" aria-colindex="3">Rolle</th>
                                          <th scope="col" aria-colindex="4">Noe annet</th>
          
                        </tr>
                      </thead>
                      <tbody>
                        <tr aria-rowindex="2">
                          <td aria-colindex="1">Alice</td>
                          <td aria-colindex="2">30</td>
                          <td aria-colindex="3">Utvikler</td>
                                <td aria-colindex="4">Utvikler</td>
                        </tr>
                        <tr aria-rowindex="3">
                          <td aria-colindex="1">Bob</td>
                          <td aria-colindex="2">25</td>
                          <td aria-colindex="3">Designer</td>
                          <td aria-colindex="4">Designer</td>
                        </tr>
                      </tbody>
                    </table>


                               <TableRole />

    </section>

      <section aria-label="knappetester">
        <button aria-label="jeg vil trykke på ja-knappen">en knapp som ikke er forklart visuelt, kun med aria label</button>
        </section>
    </div>
  );
};

export default ContentPage;