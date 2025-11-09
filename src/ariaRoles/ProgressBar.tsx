import React from 'react';
export const ProgressBar = () => <div role="progressbar" aria-valuenow={0} aria-valuemin={0} aria-valuemax={100}>
    <p>Loading... 0%</p>
    <p><span aria-hidden="true">Leses som 0% fremdriftsindikator</span></p>
</div>;
