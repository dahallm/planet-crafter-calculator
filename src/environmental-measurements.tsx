import {backgroundColor, classnames, display, grid, height, padding, typography} from 'tailwindcss-classnames';
import {EnvironmentalMeasurementInput} from './components/environmental-measurement-input';
import React from 'react';
import {useSelector} from 'react-redux';

export function EnvironmentalMeasurements() {
    const storeValue = useSelector(state => state);

    return <div className={classnames(
        backgroundColor('bg-stone-800'),
        height('h-screen'),
    )}>
        <header className={classnames(
            typography('text-center', 'text-5xl'),
            padding('p-4'),
        )}>
            Planet Crafter Calculator
        </header>
        <header className={classnames(
            typography('text-center', 'text-red-600', 'text-xl', 'font-extralight', 'italic'),
        )}>
            Work in progress!
        </header>

        <header className={classnames(
            typography('text-center'),
            padding('pt-2'),
        )}>
            your progress
        </header>
        <div className={classnames(typography('whitespace-normal'))}>{JSON.stringify(storeValue, null, 4)}</div>
        <div className={classnames(
            padding('p-3'),
            display('grid'),
            grid('col-auto', 'gap-4'),
        )}>
            <EnvironmentalMeasurementInput type={'o2'}/>
            <EnvironmentalMeasurementInput type={'heat'}/>
            <EnvironmentalMeasurementInput type={'pressure'}/>
            <EnvironmentalMeasurementInput type={'biomass'}/>
        </div>
    </div>;
}