import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {TEnvironmentalFactorMeasurements} from '../model/environment-units';

interface x extends PayloadAction {
    value: number,
    environmentalFactorMeasurement: TEnvironmentalFactorMeasurements
}

export const progressSlice = createSlice({
    name: 'environment-measurements',
    initialState: {
        o2: 0,
        heat: 0,
        pressure: 0,
        biomass: 0,
    },
    reducers: {
        setEnvironmentMeasurement: (state, action: PayloadAction<x>) => {
            state[action.payload.environmentalFactorMeasurement] = action.payload.value
        },
    },
})

// Action creators are generated for each case reducer function
export const {setEnvironmentMeasurement} = progressSlice.actions

export default progressSlice.reducer