import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
import { fetchFlights, fetchLocale, fetchAirportID } from '../actions/actions';
import ShowFlights from '../components/ShowFlights';



class Flight extends Component {


  state = {
    endCity: '',
    startCity: '',
    currency: '',
    startDate: '',
    endDate: '',
    locale: '',
    country: '',
    startAirportID: '',
    endAirportID: '',
    flight:''
  }


  componentDidMount() {
    // this.props.getLocale();
  /*   if (this.state.city && this.state.currency) {
      this.props.getAirport(this.state.city, this.state.currency);
    }*/
  } 

  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value

    })

  }
  /*  getFlightsList(startAirport,endAirport) {
     this.props.getFlights(startAirport, endAirport, this.state.startDate, this.state.endDate)
 
   } */
  getFlightsList() {
    this.props.getFlights(this.state.startAirportID, this.state.endAirportID, this.state.startDate, this.state.endDate)
  }
  /* 
    getAirportID(){
     const startAirport = this.props.getAirport(this.state.startCity,this.state.currency);
     console.log('place',startAirport);
     const endAirport = this.props.getAirport(this.state.startCity,this.state.currency);
    this.getFlightsList(startAirport,endAirport,this.state.startDate, this.state.endDate);
     
  
    }
   */
  renderFligths(){

    const flights = this.props.flights ? this.props.flights:[];
    console.log("props",this.props)
      return(
     
          <ShowFlights flights={this.props.flights} ></ShowFlights>
      )
    
    }
  handleSubmit = (e) => {
    e.preventDefault()
    //this.getAirportID();
    console.log('estado ', this.state);
    this.getFlightsList();
    // console.log('vuelos',flights);
  this.renderFligths();
  }

  render() {

    return (
      <div className="container">
        <div className="body">
          <div className="background">
            <div className="form-wrapper">
              <div className="form-container">
                <form onSubmit={this.handleSubmit} autoComplete="off">
                  < input type="text" className="text-input" name="startAirportID" placeholder="Código Origen" onChange={this.handleInputChange} value={this.state.startAirportID} />
                  < input className="text-input" name="endAirportID" placeholder="Código Destino" onChange={this.handleInputChange} value={this.state.endAirportID} />
                  < input className="text-input" name="currency" placeholder="Moneda" onChange={this.handleInputChange} value={this.state.currency} /><br></br>
                  <label hmlfor="Fecha partida">Fecha de partida</label>
                  < input type="date" className="text-input" name="startDate" onChange={this.handleInputChange} value={this.state.startDate} />
                  <label htmlFor="Fecha retorno">Fecha de retorno</label>
                  < input type="date" className="text-input" name="endDate" onChange={this.handleInputChange} value={this.state.endDate} />
                  <button className="button" type="submit" >Submit</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )

  }

}


const mapStateToProps = state => {
  return {
    // locale: state.locale,
    //endAirportID: state.endAirport,
    //startAirrportID: state.startAirport,
    flights: state.list
  }
};
const mapDispatchToProps = dispatch => {
  return {
    //getLocale: () =>
    // dispatch(fetchLocale()),
    // getAirport: (city, currency) =>
    //   dispatch(fetchAirportID(city, currency)),
    getFlights: (endAirport, startAirport, startDate, endDate) =>
      dispatch(fetchFlights(endAirport, startAirport, startDate, endDate)),
  };
};




export default connect(mapStateToProps, mapDispatchToProps)(Flight)