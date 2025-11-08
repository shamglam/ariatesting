import React from 'react';
import { Menu } from '../ariaRoles/Menus/Menu';
import { ListRole } from '../ariaRoles/Tested/ListRole';
import { LinkRole } from '../ariaRoles/Tested/LinkRole';
import { TabList } from '../ariaRoles/TabList';
import { Search } from '../ariaRoles/Tested/Search';
import { FormRole } from '../ariaRoles/Forms/FormRole';
import { Menubar } from '../ariaRoles/Menus/Menubar';
import { DocumentRole } from '../ariaRoles/DocumentRole';
export default function RolesPage() {
  return (
    <React.Fragment>
    
      <h1>ARIA Roles Examples</h1>
      <FormRole />

      <h2>Meny relaterte roller</h2>
      <Menu />

      <Menubar />

<h2 lang="en">"Search landmark" </h2>

      <Search />

<h2>Listerolle</h2>      
<ListRole />
<h2>Lenkerolle</h2>
<LinkRole />
<h2>Tabrole</h2>
    <TabList />


                <DocumentRole />
    

    </React.Fragment>
  );
}