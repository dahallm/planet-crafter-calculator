import {configureStore} from '@reduxjs/toolkit'
import '../components/unit-select-slice';
import progressReducer from '../components/unit-select-slice';

export default configureStore({
    reducer: {progress: progressReducer},
})