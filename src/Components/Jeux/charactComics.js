import React from 'react'

const Comics = ({ comics, myComics }) => {

    return (
        <div>
            <center><h1>Characters Comics Events</h1></center>
            {comics.map((comic) => (
                <div className="myCard">
                    {/* <div className="comic_Name">
                        <h1>{comic.name}</h1>
                        <p>{comic.description}</p>
                    </div> */}
                    <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="poster" />
                </div>
            ))};
        </div>
    )
};

export default Comics