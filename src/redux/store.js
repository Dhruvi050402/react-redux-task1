
import { configureStore, createSlice } from '@reduxjs/toolkit';

const valueSlice = createSlice({
    name: 'value',
    initialState: {
        text: ''
    },
    reducers: {
        setValue: (state, action) => {
            state.text = action.payload;
        }
    }
});

export const { setValue } = valueSlice.actions;

const store = configureStore({
    reducer: {
        value: valueSlice.reducer
    }
});

export default store;
