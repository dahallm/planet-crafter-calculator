import {environmentalFactorConversions, TConversionFactorKeys} from '../model/environment-units';
import {FormControl, Input, MenuItem, Select} from '@mui/material';
import classnames, {width} from 'tailwindcss-classnames';
import React from 'react';

export interface EnvironmentalMeasurementInputProps {
    type: TConversionFactorKeys;
}

export function EnvironmentalMeasurementInput(props: EnvironmentalMeasurementInputProps) {
    const factors = environmentalFactorConversions[props.type];
    const [value, setValue] = React.useState(1);


    function test(event: React.ChangeEvent<HTMLInputElement>) {
        setValue(parseFloat(event.target.value));
    }

    function handleChange() {

    }

    return <FormControl variant="standard">
        <Input
            className={classnames(
                width('w-48'),
            )}
            onChange={test}
            value={value}
            endAdornment={<FormControl variant='standard'><Select

                labelId="my-label"
                value={1}
                onChange={handleChange}
            >
                {Object.entries(factors).map(([name, factor]) =>
                    <MenuItem key={name} value={factor}>{name}</MenuItem>,
                )}
            </Select></FormControl>}
        />
    </FormControl>
}