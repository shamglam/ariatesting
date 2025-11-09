import React from 'react';
export const ComboBox = () => <div className="combo-wrap">
  <input
    type="text"
    id="jokes"
    role="combobox"
    aria-controls="joketypes"
    aria-autocomplete="list"
    aria-expanded="false"
    data-active-option="item1"
    aria-activedescendant="" />
  <span aria-hidden="true" data-trigger="multiselect"></span>
  <ul id="joketypes" role="listbox" aria-label="Jokes">
    <li className="active" role="option" aria-selected="false" id="item1">Puns</li>
    <li className="option" role="option" aria-selected="false" id="item2">Riddles</li>
    <li className="option" role="option" aria-selected="false" id="item3">Observations</li>
    <li className="option" role="option" aria-selected="false" id="item4">Knock-knock</li>
    <li className="option" role="option" aria-selected="false" id="item5">One liners</li>
  </ul>
</div>;