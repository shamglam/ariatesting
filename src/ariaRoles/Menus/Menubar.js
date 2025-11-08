import React from 'react';
import { MenuItem } from './MenuItem';
import { MenuItemCheckbox } from './MenuItemCheckbox';
import { MenuItemRadio } from './MenuItemRadio';
import { Group } from '../Group';
import { Separator } from '../Separator';
export const Menubar = () => <div role="menubar">
  <h3>Menu bar test</h3>
  <p aria-hidden="true">Leses som menyelement x av y - gruppen leses ikke.</p>
     <MenuItem label='menubar item 1'  />
       <MenuItem label='menubar item 2' />
         <MenuItem label='menubar item 3' />
           <MenuItem label='menubar item 4' />
           <Separator />
        <MenuItemCheckbox label='menubar item checkbox' />
        <MenuItemRadio label='menubar item radio' />

        <Group>

            <MenuItem label='menubar item group' />
            <MenuItemCheckbox label='menubar item group checkbox' />
            <MenuItemRadio label='menubar item group radio' />

        </Group>
    
    </div>;
