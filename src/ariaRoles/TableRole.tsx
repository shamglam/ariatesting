import React from 'react';
export const TableRole = () =>
    
    
    
    <div lang="NO"
  role="table"
  aria-label="Semantisk tabell"
  aria-describedby="semantic_elements_table_desc"
  aria-rowcount="10">
  <div id="semantic_elements_table_desc">
    Semantic Elements to use instead of ARIA's roles
  </div>
  <div role="rowgroup">
    <div role="row">
      <span role="columnheader" aria-sort="none">Fornavn</span>
      <span role="columnheader" aria-sort="ascending">Etternavn</span>
    </div>
  </div>
  <div role="rowgroup">
    <div role="row" aria-rowindex="11">
      <span role="cell">header</span>
      <span role="cell">h1</span>
    </div>
    <div role="row" aria-rowindex="16">
      <span role="cell">header</span>
      <span role="cell">h6</span>
    </div>
    <div role="row" aria-rowindex="18">
      <span role="cell">rowgroup</span>
      <span role="cell">thead</span>
    </div>
    <div role="row" aria-rowindex="24">
              

      <span role="cell">term</span>
      <span role="cell">dt</span>
    </div>
  </div>
</div>;
