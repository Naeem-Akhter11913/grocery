import { configureStore } from '@reduxjs/toolkit';
import uiSlice from './slice/uiSlice';

const store = configureStore({
    reducer: {
        ui: uiSlice, // Add your reducers here
    }
});

export default store;