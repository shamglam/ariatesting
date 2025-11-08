import React from 'react';
const Tab = () => <button role="tab" aria-selected="true" aria-controls="tabpanel-id" id="tab-id">
  Fane <span aria-hidden="true">Leses som kategorielement 1</span> av 3
</button>;

const TabPanel = () => <div role="tabpanel" tabIndex={0} aria-labelledby="placeholder-tab" />;

export const TabList = () => <div role="tablist">
    <Tab />
    <Tab />
    <Tab /> 
    <TabPanel />    
    <TabPanel />
    <TabPanel />
    </div>;
