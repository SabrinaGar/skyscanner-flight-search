import axios from 'axios'

 
/* export const FETCH_LOCAL = 'FETCH_LOCAL'
export const fetchLocale = () => {
  return async (dispatch) => {
    try {
      const locale = await axios({
        url: "https://partners.api.skyscanner.net/apiservices/autosuggest/v1.0/UK/GBP/en-GB?id=188.39.95.140-ip",
        method: 'GET',
        headers: {"X-RapidAPI-Key":  "c11c038ef1mshaea0e2402c5303fp1d75a1jsnfefe05e4019b"}
      })
      dispatch({ type: FETCH_LOCAL, payload: dispatch.data })
      console.log('locale:',locale);
    } catch (error) {
      console.log(error)
    }
  }
} */


export const FETCH_FLIGHTS = 'FETCH_FLIGHTS';
export const fetchFlights = (endAirport, startAirport, currency,startDate, endDate) => {
    return async (dispatch) => {
      try {
        const flights = await axios({
          url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/browseroutes/v1.0/VE/USD/es-VE/${startAirport}/${endAirport}/${startDate}?inboundpartialdate=${endDate}"`,
          method: 'GET',
          headers: {"X-RapidAPI-Key":  "c11c038ef1mshaea0e2402c5303fp1d75a1jsnfefe05e4019b"}
        })
        dispatch({ type: FETCH_FLIGHTS, payload: dispatch.data },flights)
        console.log('flights:',flights);
      } catch (error) {
        console.log(error)
      }
    }
  }
  export const FETCH_AIRPORT = 'FETCH_AIRPORT';
  export const fetchAirportID = (city, currency) => {
    return async (dispatch,getState) => {
      try {
        const airport = await axios({
          url: `https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/VE/${currency}/es-VE/?query=${city}"`,
          method: 'GET',
          headers: {"X-RapidAPI-Key":  "c11c038ef1mshaea0e2402c5303fp1d75a1jsnfefe05e4019b"}
        })
        dispatch({ type: FETCH_AIRPORT },airport)
        console.log('airport:',airport);
      } catch (error) {
        console.log(error)
      }
    }
  }


