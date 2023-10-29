import { useDispatch, useSelector } from 'react-redux';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { setPosition } from 'store/cube-slice';

const PositionControl = () => {
  const position = useSelector((state) => state.cube.position);
  const dispatch = useDispatch();

  const handlePositionChange = (axis) => (event, value) => {
    dispatch(setPosition({ ...position, [axis]: value }));
  };

  return (
    <Box>
      <Typography gutterBottom>Position</Typography>
      <Typography gutterBottom>X:</Typography>
      <Slider value={position.x} step={0.1} min={-5} max={5} onChange={handlePositionChange('x')} />

      <Typography gutterBottom>Y:</Typography>
      <Slider value={position.y} step={0.1} min={-5} max={5} onChange={handlePositionChange('y')} />

      <Typography gutterBottom>Z:</Typography>
      <Slider value={position.z} step={0.1} min={-5} max={5} onChange={handlePositionChange('z')} />
    </Box>
  );
};

export default PositionControl;
