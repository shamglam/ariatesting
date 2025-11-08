import React from 'react';
import { ButtonRole } from './ButtonRole';
import { RadioGroup } from './RadioGroup';
import { CheckboxRole } from './CheckboxRole';
import { Option } from './Option';
import { ListBox } from './ListBox';
import { ComboBox } from './ComboBox';
import { Textbox } from './Textbox';
export const FormRole = () => <div role="form"  aria-label="bestillingsskjema">
<h3>Skjema og skjemaelement roller</h3>
this is a fake form role
<ButtonRole />
<RadioGroup />
<CheckboxRole />
<ListBox />
<ComboBox />
<Textbox />
<Option />
</div>;
