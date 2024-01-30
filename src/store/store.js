import { configureStore } from '@reduxjs/toolkit';
import catsSlice from './slices/catsSlice';

const store = configureStore({
    reducer: {
        cats: catsSlice,
    },
});

export default store;
