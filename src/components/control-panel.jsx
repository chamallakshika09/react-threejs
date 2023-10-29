import { Box } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import ScaleControl from './scale-control';
import RotationControl from './rotation-control';
import PositionControl from './position-control';
import ColorControl from './color-control';

export const ControlPanel = ({ setShowControls }) => {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '10px',
        left: '10px',
        display: 'flex',
        flexDirection: 'column',
        gap: '25px',
        padding: '20px',
        width: '300px',
        maxHeight: 'calc(100vh - 100px)',
        overflowY: 'auto',
        border: '1px solid #ccc',
        borderRadius: '8px',
        boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)',
        backgroundColor: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1000,
        '& .MuiSlider-root': {
          margin: '10px 0',
        },
      }}
    >
      <IconButton
        onClick={() => setShowControls(false)}
        sx={{
          position: 'absolute',
          top: '5px',
          right: '5px',
          zIndex: 1001,
          backgroundColor: 'rgba(255, 255, 255, 0.5)',
          '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.75)',
          },
        }}
      >
        <CloseIcon />
      </IconButton>
      <ColorControl />
      <ScaleControl />
      <RotationControl />
      <PositionControl />
    </Box>
  );
};
