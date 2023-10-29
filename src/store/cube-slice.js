import { createSlice } from '@reduxjs/toolkit';

export const cubeSlice = createSlice({
  name: 'cube',
  initialState: {
    color: 0x00ff00,
    scale: { x: 1, y: 1, z: 1 },
    rotation: {
      x: 0 * (180 / Math.PI),
      y: 0 * (180 / Math.PI),
      z: 0 * (180 / Math.PI),
    },
    position: { x: 0, y: 0, z: 0 },
  },
  reducers: {
    setColor: (state, action) => {
      state.color = action.payload;
    },
    setScale: (state, action) => {
      state.scale = action.payload;
    },
    setRotation: (state, action) => {
      state.rotation = action.payload;
    },
    setPosition: (state, action) => {
      state.position = action.payload;
    },
  },
});

export const { setColor, setScale, setRotation, setPosition } = cubeSlice.actions;
export default cubeSlice.reducer;

export const selectColor = (state) => state.cube.color;
export const selectScale = (state) => state.cube.scale;
export const selectPosition = (state) => state.cube.position;
export const selectRotation = (state) => state.cube.rotation;
