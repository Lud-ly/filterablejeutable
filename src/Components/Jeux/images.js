import React from 'react'

    const Images = ({ images }) => {
      return (
        <div>
          <center><h1>Images List</h1></center>
          {images.map((image) => (
            <div className="card">
              <div className="card-body">
                <h2>{image.title}</h2>
                <img src={image.thumbnailUrl}alt="yaya"/>
                <a href={image.url}><p>{image.url}</p></a>
              </div>
            </div>
          ))}
        </div>
      )
    };

    export default Images