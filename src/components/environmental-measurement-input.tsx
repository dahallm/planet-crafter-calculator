import {TEnvironmentalFactorMeasurements, TPossibleFactors} from '../model/environment-units';
import {FormControl, Input, InputLabel} from '@mui/material';
import classnames, {width} from 'tailwindcss-classnames';
import React from 'react';
import {UnitSelect} from './UnitSelect';
import {setEnvironmentMeasurement} from './unit-select-slice';
import {useDispatch} from 'react-redux';

export interface EnvironmentalMeasurementInputProps {
    type: TEnvironmentalFactorMeasurements;
}

export function EnvironmentalMeasurementInput(props: EnvironmentalMeasurementInputProps) {
    const dispatch = useDispatch();
    const [value, setValue] = React.useState('0');
    const [factor, setFactor] = React.useState(1 as TPossibleFactors);

    function updateStore(event: React.FocusEvent<HTMLInputElement>) {
        let rawValue = event.target.value;
        if (!rawValue || rawValue === ',' || rawValue === '.') {
            rawValue = '0';
        }
        update(rawValue, factor);
    }

    function update(inputNumber: string, factor: TPossibleFactors) {
        const containsComma = inputNumber.includes(',');
        const float = parseFloat(inputNumber.replace(',', '.'));
        const newValue = float * factor;
        const floatString = float.toString();

        setValue(containsComma ? floatString.replace('.', ',') : floatString);
        dispatch(setEnvironmentMeasurement({environmentalFactorMeasurement: props.type, value: newValue}));
    }

    function allowDigitsAndAtMostOneDecimalSeparator(event: React.ChangeEvent<HTMLInputElement>) {
        let rawValue = event.target.value;
        if (rawValue.match(/^\d*[.,]?\d*$/)) {
            setValue(rawValue);
        }
    }

    function clearIfZero() {
        if (value === '0') {
            setValue('');
        }
    }

    function updateFactor(factor: TPossibleFactors) {
        setFactor(factor);
        update(value, factor);
    }

    return <div>
        <InputLabel>{props.type}</InputLabel>
        <FormControl variant="standard">
            <Input
                className={classnames(
                    width('w-48'),
                )}
                aria-label={'test'}
                onFocus={clearIfZero}
                onChange={allowDigitsAndAtMostOneDecimalSeparator}
                onBlur={updateStore}
                value={value}
            />
        </FormControl>
        <UnitSelect onChange={updateFactor} type={props.type}/>
    </div>
}