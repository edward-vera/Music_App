import * as React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

const label = { inputProps: { 'aria-label': 'Online Mode' } };

export default function Volume() {
  const [value, setValue] = React.useState(30);
  const [isLowVolume, setLowVolume] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const volume = () => {

  }

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Slider 
        aria-label="Volume" 
        value={value} 
        onChange={handleChange} 
        min={0} max={100} 
        valueLabelDisplay="auto" 
        step={10} marks
        color="primary"
        />
      </Stack>
    </Box>
  );
  console.log();
}