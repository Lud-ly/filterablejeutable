import React from 'react'

    const Countries = ({ countries }) => {
      return (
        <div>
          <center><h1>Countries covid List</h1></center>
          {countries.map((country) => (
            <div className="card">
              <div className="card-body">
              <h1>{country.Country}</h1>
              <h4>Total cas confirmés {country.TotalConfirmed}</h4>
              <h4>Total Guéris {country.TotalRecovered}</h4>
              <h4>Morts {country.TotalDeaths}</h4>
              <h4>Guéris {country.NewRecovered}</h4>
              <h4>nouveau cas {country.NewConfirmed}</h4>
              <h4>nouveau décès {country.NewDeaths}</h4>
              <h4>{country.Date}</h4>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Countries