import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';


export default function CardControllerWithChildren(props) {
  const {title, description, id, children} = props;
  return (
    <Card sx={{ maxWidth: 275 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          {props.description}    
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 2 }}>
          {props.id}    
        </Typography>
      </CardContent>
      <CardActions>
      {props.children}
      </CardActions>
    </Card>
  );
}