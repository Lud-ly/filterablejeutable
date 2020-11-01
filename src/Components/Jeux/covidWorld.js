import React from 'react'

    const Totalcovid = ({ allworlds }) => {
      return (
        <div>
          <center><h1>Total World covid List</h1></center>
           
            <h1>Chiffres Total du covid dans le monde</h1>
             <table className="table">
                       <thead>
                            <tr>
                                <th>Total cas covid 19 confirmés </th>
                                <th> Morts </th>
                                <th >Total Guéris</th>
                                <th>Nouveau Guéris</th>
                                <th>nouveau cas</th>
                                <th>nouveau décès</th>
                            </tr>
                        </thead>
                    <tbody>
                    <td> {allworlds.TotalConfirmed}</td>
                    <td> {allworlds.TotalDeaths}</td>
                    <td> {allworlds.TotalRecovered} </td>
                    <td> {allworlds.NewRecovered} </td>
                    <td> {allworlds.NewConfirmed}</td>
                    <td> {allworlds.NewDeaths}</td>
                    </tbody>
                </table>
        </div>
      )
    };

    export default Totalcovid