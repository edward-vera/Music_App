import React, {useEffect} from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';

export default function Volume(props) {
  console.log(props);

  const handleChange = (event) => {
    props.setState(event.target.value);
  };

  useEffect(() => {
    console.log(props.state);
  },
  [props.setState, props.state])

  return (
    <Box sx={{ width: 200 }}>
      <Stack spacing={2} direction="row" sx={{ mb: 1 }} alignItems="center">
        <Slider
        aria-label="Volume" 
        value={props.value} 
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