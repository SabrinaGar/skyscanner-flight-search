import React from 'react';
import logo from './assets/img/logo-avion.png';
import Footer from './components/Footer';
import Content from './components/Content';
import NavBar from './components/NavBar';


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
  const footerLinksC1 = [
    {
      text: 'Planes',
      path: '/',
      
    },
    {
      text: 'Beneficios', 
      path:'/'       
    },
    {
      text: 'Cotizar un plan', 
      path:'/'       
    },
    ,
    {
      text: 'FAQs', 
      path:'/'    

    },
    {
      text: 'T&C', 
      path:'/'    

    }
     ]
  const footerLinksC2=[
    {
      text: 'Aliados', 
      path:'/'       
    },
    {
      text: 'Contacto', 
      path:'/'       
    },
    {
      text: '¿Quiénes somos?', 
      path:'/'       
    }
  ]
  const footerLinksC3=[
    {
      text: 'Políticas de Privacidad', 
      path:'/'    

    },
    {
      text: 'Sobre Jobs and Talent', 
      path:'/'    

    },
    {
      text: 'Asistencia SOS', 
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
      <Content></Content>
    <Footer
     background='rgb(32,8,68)'
     color='#FFFFFF' 
     footerLinksC1={footerLinksC1}
     footerLinksC2={footerLinksC2}
     footerLinksC3={footerLinksC3}></Footer>
    </div>
  );
}

export default App;
