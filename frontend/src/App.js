import Dashboard from './views/Dashboard.js';
import Footer from './components/Footer/Footer';
import { makeStyles } from '@material-ui/core';

import HeaderSection from './components/Header/HeaderSection';

const useStyles = makeStyles((theme) => ({
  '@global': {
    '*::-webkit-scrollbar': {
      width: '0.4em',
      height: '0.4em',
      background : '#2F4451',      
    },
    '*::-webkit-scrollbar-track': {
      '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.00)',
    },
    '*::-webkit-scrollbar-thumb': {
      backgroundColor: '#6D7183',
      outline: '1px solid slategrey',
    },
  },  
  mainBackground: {
    background:'#39495e', 
    height : '100%' ,
    color : 'white' 
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    height: 140,
    width: 100,
  },
}));

function App() {
  const classes = useStyles();
  return (
    <div className={classes.mainBackground}>
      <HeaderSection/>
      <Dashboard />
      <Footer/>    
    </div>

  );
}

export default App;
