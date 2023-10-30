import { useDispatch, useSelector } from 'react-redux';
import Slider from '@mui/material/Slider';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { setRotation } from 'store/cube-slice';

const RotationControl = () => {
  const rotation = useSelector((state) => state.cube.rotation);
  const dispatch = useDispatch();

  const handleRotationChange = (axis) => (event, value) => {
    dispatch(setRotation({ ...rotation, [axis]: value }));
  };

  return (
    <Box>
      <Typography gutterBottom>Rotation</Typography>
      <Typography gutterBottom>X:</Typography>
      <Slider
        value={rotation.x}
        min={0}
        max={360}
        step={10}
        onChange={handleRotationChange('x')}
        valueLabelDisplay="auto"
      />

      <Typography gutterBottom>Y:</Typography>
      <Slider
        value={rotation.y}
        min={0}
        max={360}
        step={10}
        onChange={handleRotationChange('y')}
        valueLabelDisplay="auto"
      />

      <Typography gutterBottom>Z:</Typography>
      <Slider
        value={rotation.z}
        min={0}
        max={360}
        step={10}
        onChange={handleRotationChange('z')}
        valueLabelDisplay="auto"
      />
    </Box>
  );
};

export default RotationControl;
