import axios from 'axios'

export const SHOW_FLIGHTS = 'SHOW_FLIGHTS'


export const fetchFlights = (endAirport, startAirport, startDate, endDate) => {
    return async (dispatch) => {
      try {
        const flights = await axios({
          url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/US/USD/en-US/${startAirport}/${endAirport}/${startDate}/${endDate}`,
          method: 'GET',
          headers: {"X-RapidAPI-Key":  "c11c038ef1mshaea0e2402c5303fp1d75a1jsnfefe05e4019b"}
        })
        dispatch({ type: SHOW_FLIGHTS, payload: dispatch.data })
        console.log('flights:',flights);
      } catch (error) {
        console.log(error)
      }
    }
  }

  
/* export const fetchAirport= () => {
    return async (dispatch) => {
      try {s
        const flights = await axios({
          url:  "https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/reference/v1.0/countries/en-US",
          method: 'GET',
          headers: {"X-RapidAPI-Key":  "c11c038ef1mshaea0e2402c5303fp1d75a1jsnfefe05e4019b"}
        })
        dispatch({ type: SHOW_FLIGHTS, payload: dispatch.data })
        console.log('flights:',flights);
      } catch (error) {
        console.log(error)
      }
    }
  } */