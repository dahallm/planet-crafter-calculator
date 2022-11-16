export type TEnvironmentalFactorMeasurements = 'o2' | 'heat' | 'pressure' | 'biomass';
export type TConversionFactorKeys = TEnvironmentalFactorMeasurements | 'ti';

export type TPossibleFactors = 1 | 1000 | 1000000 | 1000000000;

export type TConversionFactors<T extends TConversionFactorKeys> = {
    [key in T]: TPossibleFactors;
};

export const environmentalFactorConversions: { [T in TConversionFactorKeys]: TConversionFactors<any> } = {
    o2: {
        ppq: 1,
        ppt: 1000,
        ppb: 1000000,
        ppm: 1000000000,
    },
    heat: {
        pk: 1,
        nk: 1000,
        uk: 1000000,
        mk: 1000000000,
    },
    pressure: {
        npa: 1,
        upa: 1000,
        mpa: 1000000,
        pa: 1000000000,
    },
    biomass: {
        g: 1,
        kg: 1000,
        t: 1000000,
        kt: 1000000000,
    },
    ti: {
        Ti: 1,
        kTi: 1000,
        mTi: 1000000,
        gTi: 1000000000,
    },
}