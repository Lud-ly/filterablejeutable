import React from 'react'

const Heros = ({ posters }) => {
    return (
        <div>
            <center><h1>Characters Comics Events</h1></center>
            {posters.map((poster) => (
                <div className="card">
                    <div className="card-body">
                       
                       <img src={`${poster.thumbnail.path}.${poster.thumbnail.extension}`}alt="poster"/>
                    </div>
                </div>
            ))}
        </div>
    )
};

export default Heros