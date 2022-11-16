import {FormControl, MenuItem, Select, SelectChangeEvent} from '@mui/material';
import React from 'react';
import {environmentalFactorConversions, TConversionFactorKeys, TPossibleFactors} from '../model/environment-units';
import classnames, {width} from 'tailwindcss-classnames';

export interface UnitSelectProps {
    type: TConversionFactorKeys;
    onChange: (value: TPossibleFactors) => void;
}

export function UnitSelect(props: UnitSelectProps) {
    const factors = environmentalFactorConversions[props.type];
    const [value, setValue] = React.useState('1');


    const handleChange = (event: SelectChangeEvent) => {
        const rawValue = event.target.value;
        setValue(rawValue);
        props.onChange(parseInt(rawValue, 10) as TPossibleFactors);
    };

    return <FormControl variant='standard'>
        <Select
            className={classnames(
                width('w-20')
            )}
            labelId="my-label"
            value={value}
            onChange={handleChange}
        >
            {Object.entries(factors).map(([name, factor]) =>
                <MenuItem key={name} value={factor}>{name}</MenuItem>,
            )}
        </Select>
    </FormControl>;
}