import {createSlice, PayloadAction} from "@reduxjs/toolkit";

import {IMovie} from "../../types";

type HomeState = {
    list: IMovie[];
};

const initialState: HomeState = {
    list: [],
};

export const homeSlice = createSlice({
    name: "home",
    initialState,
    reducers: {
        addMovies(state: HomeState, action: PayloadAction<IMovie>) {
            state.list.push(action.payload);
        },
    },
});

export const {addMovies} = homeSlice.actions;

export default homeSlice.reducer;
