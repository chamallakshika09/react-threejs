import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  scale: { x: 1, y: 1, z: 1 },
  position: { x: 0, y: 0, z: 0 },
  rotation: { x: 0, y: 0, z: 0 },
};

export const transformSlice = createSlice({
  name: 'transform',
  initialState,
  reducers: {
    modifyScale: (state, action) => {
      state.scale = action.payload;
    },
    modifyPosition: (state, action) => {
      state.position = action.payload;
    },
    modifyRotation: (state, action) => {
      state.rotation = action.payload;
    },
  },
  extraReducers: (builder) => {},
});

export const { modifyScaler, modifyPosition, modifyRotation } = transformSlice.actions;

export default transformSlice.reducer;

export const selectScale = (state) => state.transform.scale;
export const selectPosition = (state) => state.transform.position;
export const selectRotation = (state) => state.transform.rotation;
