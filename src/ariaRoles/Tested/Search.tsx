import React from 'react';
import { SearchBox } from './SearchBox';
export const Search = () => <form role="search" aria-label="finn innhold">
  <input type="search" placeholder="Skriv hva du vil søke på" />
  <SearchBox />
<button type="submit">Search</button>
</form>;
