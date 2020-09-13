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
            <div className="form-container">
              <div className="form-wrapper">
                <form onSubmit={this.handleSubmit} autoComplete="off">
                  <input className="text-input" name="bAccountNo" placeholder="Account Number" onChange={this.handleInputChange} value={this.state.bAccountNo} /><br />
                  < input className="text-input" name="iFSC" placeholder="IFSC" onChange={this.handleInputChange} value={this.state.iFSC} /><br />
                  < input className="text-input" name="bName" placeholder="A/C Holder Name" onChange={this.handleInputChange} value={this.state.bName} /><br />
                  < input className="text-input" name="amount" placeholder="Amount" onChange={this.handleInputChange} value={this.state.amount} /><br />
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