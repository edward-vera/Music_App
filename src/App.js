import React, {useState} from 'react';
import './app.css'; 
import Header from './component/Header'
import Signin from './component/Signin'
import Switch from '@mui/material/Switch';
import CardControllerWithChildren from './component/CardControllerWithChildren';
import Volume from './component/Volume';
import Quality from './component/Quality'


const label = { inputProps: { 'aria-label': 'Online Mode' } };


function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isOnline, setIsOnline] = React.useState(false);

  return (
    <div className="app">
      <Header />
      {isLoggedIn === true ? ( 
        <>     
          <p>Welcome Nerd!</p>

        <CardControllerWithChildren
        title="Master Volume"
        description="Overrides all other douns settings in this application">
        <Switch {...label} onChange={() => setIsOnline(!isOnline)}/>
        </CardControllerWithChildren>

        <CardControllerWithChildren
        title="Online Mode (NEW)"
        description="Is this application connected to the internet?">
        <Volume />
        </CardControllerWithChildren>
        
        
        <CardControllerWithChildren
        title="Sound Qaulity"
        description="Manually control the music quality in event of poor connection">
        <Quality />
        </CardControllerWithChildren>

      <h4>System Notifications:</h4>
      {isOnline && (
        <p>
        Your application is offline. 
        You won't be able to share or stream music to other devices.
        </p>
      )}
      </>

    ) : (
    <Signin setIsLoggedIn={setIsLoggedIn}/>
    )}
    </div>
  );
}

export default App;
