import { useDispatch, useSelector } from 'react-redux';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { setRotation } from 'store/cube-slice';

const RotationControl = () => {
  const rotation = useSelector((state) => state.cube.rotation);
  const dispatch = useDispatch();

  const handleRotationChange = (axis) => (event, value) => {
    dispatch(setRotation({ ...rotation, [axis]: value * (Math.PI / 180) }));
  };

  return (
    <Box>
      <Typography gutterBottom>Rotation</Typography>
      <Typography gutterBottom>X:</Typography>
      <Slider value={rotation.x} min={0} max={360} step={1} onChange={handleRotationChange('x')} />

      <Typography gutterBottom>Y:</Typography>
      <Slider value={rotation.y} min={0} max={360} step={1} onChange={handleRotationChange('y')} />

      <Typography gutterBottom>Z:</Typography>
      <Slider value={rotation.z} min={0} max={360} step={1} onChange={handleRotationChange('z')} />
    </Box>
  );
};

export default RotationControl;
