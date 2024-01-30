import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

const initialState = {
    catsList: [],
    favoriteCats: [],
};

export const fetchGetCats = createAsyncThunk('cats/fetchGetCats', async function () {
    const data = await api.getCats();
    return data;
});

const catsSlice = createSlice({
    name: 'cats',
    initialState: initialState,
    extraReducers: (builder) => {
        builder.addCase(fetchGetCats.fulfilled, (state, { payload }) => {
            state.catsList = payload;
        });
    },
});

export default catsSlice.reducer;
