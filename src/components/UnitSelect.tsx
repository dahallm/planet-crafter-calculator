import {MenuItem, Select, SelectChangeEvent} from '@mui/material';
import React from 'react';
import {environmentalFactorConversions, TConversionFactorKeys, TPossibleFactors} from '../model/environment-units';

export interface UnitSelectProps {
    type: TConversionFactorKeys;
}

export function UnitSelect(props: UnitSelectProps) {
    const factors = environmentalFactorConversions[props.type];
    const [factor, setFactor] = React.useState(1);

    const handleChange = (event: SelectChangeEvent) => {
        setFactor(+event.target.value as TPossibleFactors);
    };

    return <Select
        labelId="my-label"
        value={factor.toString()}
        onChange={handleChange}
    >
        {Object.entries(factors).map(([name, factor]) =>
            <MenuItem key={name} value={factor}>{name}</MenuItem>
        )}
    </Select>;
}