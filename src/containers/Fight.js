import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux'
//import { fetchFlights } from '../actions/actions';
import airplaneImg from '../assets/img/airplane-img.jpg'


class Flight extends Component {


  state = {
    // ...this.returnStateObject()
  }

  /*   returnStateObject() {
      if (this.props.currentIndex == -1)
        return {
          bAccountNo: '',
          iFSC: '',
          bName: '',
          amount: ''
        }
      else
        return this.props.list[this.props.currentIndex]
    } */

  /*   componentDidUpdate(prevProps) {
      if (prevProps.currentIndex != this.props.currentIndex || prevProps.list.length != this.props.list.length) {
        this.setState({ ...this.returnStateObject() })
      }
    }
   */
  handleInputChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    if (this.props.currentIndex == -1)
      this.props.insertTransaction(this.state)
    else
      this.props.updateTransaction(this.state)
  }

  render() {
    return (
      <div className="container">
        <div className="body">
          <div className="background">
          <div className="form-wrapper">
            <div className="form-container">
                <form onSubmit={this.handleSubmit} autoComplete="off">
                  <input className="text-input" name="Ciudad de orígen" placeholder="Ciudad de orígen" onChange={this.handleInputChange} value={this.state.bAccountNo} />
                  < input className="text-input" name="Ciudad de destino" placeholder="Ciudad de destino" onChange={this.handleInputChange} value={this.state.iFSC} />
                  < input className="text-input" name="Moneda" placeholder="Moneda" onChange={this.handleInputChange} value={this.state.bName} /><br></br>
                  <label for="Fecha partida">Fecha de partida</label>
                  < input type="date"className="text-input" name="Fecha partida" placeholder="Amount" onChange={this.handleInputChange} value={this.state.amount} />
                  <label for="Fecha retorno">Fecha de retorno</label>
                  < input type="date"className="text-input" name="Fecha retorno" placeholder="Amount" onChange={this.handleInputChange} value={this.state.amount} />
                  <button className="button" type="submit">Submit</button>
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
    users: state.flights
  }
};



export default connect(mapStateToProps)(Flight)