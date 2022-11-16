import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TEnvironmentalFactorMeasurements} from '../model/environment-units';

export type SetEnvironmentMeasurementPayload = PayloadAction<{
    value: number,
    environmentalFactorMeasurement: TEnvironmentalFactorMeasurements
}>

const initialState: { [key in TEnvironmentalFactorMeasurements]: number } = {
    o2: 0,
    heat: 0,
    pressure: 0,
    biomass: 0,
}

const progressSlice = createSlice({
    name: 'environment-measurements',
    initialState,
    reducers: {
        setEnvironmentMeasurement: (state, action: SetEnvironmentMeasurementPayload) => {
            state[action.payload.environmentalFactorMeasurement] = action.payload.value;
        },
    },
})

export const {setEnvironmentMeasurement} = progressSlice.actions

export default progressSlice.reducer