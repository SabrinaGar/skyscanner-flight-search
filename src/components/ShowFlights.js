import React from 'react';

const ShowFlights= ({ flights }) => {

    if(flights){
    return (
        <div className="container">
            <div className="body">
                <div className="table-content">
                    <div className="table-rows">

                        {flights.map((flights) =>

                            <div className="table-colums">
                                <h2 className="medium-font">Precios</h2>

                                <p className="smoll-font">{flights.MinPrice}</p>
                            </div>

                        )}

                    </div>

                </div>

            </div>
        </div>

    )}
    else{
        return(
        <p>No se encontraron vuelos disponible.</p>
        )
    }
}

export default ShowFlights;