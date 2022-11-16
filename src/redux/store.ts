import {configureStore} from '@reduxjs/toolkit'
import '../components/unit-select-slice';
import {progressSlice} from '../components/unit-select-slice';

export default configureStore({
    reducer: {progress: progressSlice.reducer},
})