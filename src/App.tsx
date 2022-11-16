import React from 'react';
import {createTheme, ThemeProvider} from '@mui/material';
import store from './redux/store';
import {Provider} from 'react-redux';
import {EnvironmentalMeasurements} from './environmental-measurements';

const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

function App() {
    return (
        <ThemeProvider theme={darkTheme}>
            <Provider store={store}>
                <EnvironmentalMeasurements/>
            </Provider>
        </ThemeProvider>
    );
}

export default App;
