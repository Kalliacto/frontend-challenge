import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { api } from '../../utils/api';

const favoriteCats = localStorage.getItem('favoriteCat') ? JSON.parse(localStorage.getItem('favoriteCat')) : [];

const initialState = {
    catsList: [],
    favoriteCats,
    isLoading: false,
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
            if (!state.catsList.length) {
                state.catsList = payload;
            }
            state.catsList = [...state.catsList, ...payload];
            state.isLoading = false;
        });
        builder.addCase(fetchGetCats.pending, (state, { payload }) => {
            state.isLoading = true;
        });
    },
    reducers: {
        addLike(state, { payload }) {
            state.favoriteCats = [...state.favoriteCats, payload];
            localStorage.setItem('favoriteCat', JSON.stringify(state.favoriteCats));
        },
        removeLike(state, { payload }) {
            state.favoriteCats = state.favoriteCats.filter((el) => el.id !== payload.id);
            localStorage.setItem('favoriteCat', JSON.stringify(state.favoriteCats));
        },
    },
});

export const { addLike, removeLike } = catsSlice.actions;
export default catsSlice.reducer;
