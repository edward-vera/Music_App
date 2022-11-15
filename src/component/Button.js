import * as React from 'react';
import Button from '@mui/material/Button';

export default function MyButton() {
  return (
    <div>
      <Button variant="contained"  onClick={() => console.log("clicked")}>Hello World</Button>
      <Button variant=""  onClick={() => console.log("clicked")}>Hello World</Button>
    </div>
  );
}