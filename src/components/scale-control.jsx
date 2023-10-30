import { useDispatch, useSelector } from 'react-redux';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { setScale } from 'store/cube-slice';

const ScaleControl = () => {
  const scale = useSelector((state) => state.cube.scale);
  const dispatch = useDispatch();

  const handleScaleChange = (axis) => (event, value) => {
    dispatch(setScale({ ...scale, [axis]: value }));
  };

  return (
    <Box>
      <Typography gutterBottom>Scale</Typography>
      <Typography gutterBottom>X:</Typography>
      <Slider value={scale.x} step={0.1} min={0.5} max={3} onChange={handleScaleChange('x')} valueLabelDisplay="auto" />

      <Typography gutterBottom>Y:</Typography>
      <Slider value={scale.y} step={0.1} min={0.5} max={3} onChange={handleScaleChange('y')} valueLabelDisplay="auto" />

      <Typography gutterBottom>Z:</Typography>
      <Slider value={scale.z} step={0.1} min={0.5} max={3} onChange={handleScaleChange('z')} valueLabelDisplay="auto" />
    </Box>
  );
};

export default ScaleControl;
