import React from 'react';
export const MenuItemCheckbox = ({ label="Default", closeMenus, explain='' }) => {
  const [checked, setChecked] = React.useState(false);
  const toggleChecked = () => setChecked(!checked);
    const handleKeyPress = (e) => { 
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleChecked();
            closeMenus && closeMenus();
        }
        if (e.key === 'Escape') {
            e.preventDefault();
            closeMenus && closeMenus();
        }

        if(e.key=== 'Space'){
            e.preventDefault();
            toggleChecked();
        }   

    };
  return (
    <div role="menuitemcheckbox" tabIndex={0} onClick={toggleChecked} onKeyDown={handleKeyPress} aria-checked={checked}>
      {checked ? '☑' : '☐'} {label}
      <span aria-hidden="true">{explain}</span>
    </div>
  );
};
