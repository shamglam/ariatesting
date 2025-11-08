import React from 'react';
import { MenuItem } from './MenuItem';
import { MenuItemCheckbox } from './MenuItemCheckbox';
import { MenuItemRadio } from './MenuItemRadio';
import { Group } from '../Group';
export const Menu = () => <div role="menu">
    <h3>Meny med menyrollene</h3>
    <MenuItem label="Menyelement 1" explain="Dette leses som menyelement x av y" />
    <MenuItemCheckbox label="Kryss av her" explain="Dette leses som en avkrysningsboks, ikke krysset, menyelement x av y" />
    <MenuItemRadio label="Slå på denne" explain="Dette leses som en alternativknapp, ikke valgt, menyelement x av y" />

    <Group>
        <MenuItem hasPopup={true} label="Menyelement med undermeny" explain="Dette leses som menyelement x av y - har huritgmeny" />

    </Group>
</div>;
