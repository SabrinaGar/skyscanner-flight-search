import React from 'react';
import logo from './assets/img/logo-avion.png';

import  NavBar from './components/NavBar';


function App() {
  const navLinks = [
    {
      text: 'Inicio',
      path: '/',
      
    },
    {
      text: 'Contact', 
      path:'/'       
    }
    
  ]
  return (
    <div className="App">
     <NavBar
				navLinks={ navLinks }
				logo={ logo }
				background="#FEFEFE"
				hoverBackground="#ddd"
				linkColor="#777"
			/>
		
    </div>
  );
}

export default App;
