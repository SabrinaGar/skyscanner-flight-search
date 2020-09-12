import React from 'react';
import logo from './assets/img/logo-avion.png';
import Footer from './components/Footer';
import TableContent from './components/TableContent';
import NavBar from './components/NavBar';
import PhoneIcon from './assets/img/phone-icon.PNG';
import AmbulanceIcon from './assets/img/ambulance-icon.PNG';
import ConsultIcon from './assets/img/consult-icon.PNG';
import HomeIcon from './assets/img/home-icon.PNG';
import MedIcon from './assets/img/med-icon.PNG';
import HospIcon from './assets/img/hosp-icon.PNG';
import HomeLayout from './components/HomeLayout';
import Flights from './containers/Fight';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom"

function App() {
  const navLinks = [
    {
      text: 'Inicio',
      path: '/',

    },
    {
      text: 'Flights',
      path: '/flights'
    }

  ]
  const footerLinks = [
    {
      text: 'Planes',
      path: '/',

    },
    {
      text: 'Beneficios',
      path: '/'
    },
    {
      text: 'Cotizar un plan',
      path: '/'
    },
    ,
    {
      text: 'FAQs',
      path: '/'

    },
    {
      text: 'T&C',
      path: '/'

    },
    {
      text: 'Aliados',
      path: '/'
    },
    {
      text: 'Contacto',
      path: '/'
    },
    {
      text: '¿Quiénes somos?',
      path: '/'
    },
    {
      text: 'Políticas de Privacidad',
      path: '/'

    },
    {
      text: 'Sobre Jobs and Talent',
      path: '/'

    },
    {
      text: 'Asistencia SOS',
      path: '/'

    }
  ]
  const tableContent = [
    {
      title: 'Telemedicina',
      text: 'Médicos 24 horas por teléfono y video llamada a través de la App para orientar y clasificar la emergencia.',
      img: PhoneIcon
    },
    {
      title: 'Atención médica domiciliaria',
      text: 'Envío de médicos y paramédicos al sitio donde se encuentre el paciente para realizar una consulta presencial y determinar mejor las necesidades',
      img: HomeIcon
    },
    {
      title: 'Entrega de medicamentos',
      text: 'Se realizará el envío de los medicamentos para enfermedades agudas (por ejemplo: antibióticos), incluidos en el alcance de asistensi, con entrega inmediata.',
      img: MedIcon
    },
    {
      title: 'Ambulancia',
      text: 'Envío de ambulancias equipadas con soporte avanzado de vida para la realización de traslados de emergencia hacia la clínica afiliada al seguro y de retorno por altas médicas.',
      img: AmbulanceIcon
    },
    {
      title: 'Hospitalización y cirugía',
      text: 'El paciente recibirá atención profesional en las clínicas afiliadas, hasta por el monto de la cobertura contratada.',
      img: HospIcon
    },
    {
      title: 'Consultas médicas por especialista',
      text: 'Consultas anuales de las siguientes especialidades: Medicina interna, cirugía general, traumatología, ginecología y urología',
      img: ConsultIcon
    },

  ]
  return (
    <div className="App">
      <NavBar
        navLinks={navLinks}
        logo={logo}
        background="#FEFEFE"
        hoverBackground="#ddd"
        linkColor="#777"
      />
      <Router>
        <Switch>

          <Route path="/flights" component={Flights} />
          <Route path="/" component={() => <HomeLayout tableContent={tableContent} />} />

        </Switch>
      </Router>

      <Footer
        background='rgb(32,8,68)'
        color='#FFFFFF'
        footerLinks={footerLinks}
      ></Footer>
    </div>
  );
}

export default App;