import { useDispatch, useSelector } from 'react-redux';
import { SketchPicker } from 'react-color';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { selectColor, setColor } from 'store/cube-slice';

const ColorControl = () => {
  const dispatch = useDispatch();
  const color = useSelector(selectColor);

  return (
    <Box>
      <Typography gutterBottom>Cube Color</Typography>
      <SketchPicker color={color} onChangeComplete={(newColor) => dispatch(setColor(newColor.hex))} />
    </Box>
  );
};

export default ColorControl;
