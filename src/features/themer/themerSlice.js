import { createSlice } from '@reduxjs/toolkit';

export const themerSlice = createSlice({
    initialState: {
        value: '',
    },
    name: 'themer',
    reducers: {
        reset: state => {
            state.value = '';
        },
        win98: state => {
            state.value = 'win98';
        },
    },
});
  
export const { reset, win98 } = themerSlice.actions;

export default themerSlice.reducer;