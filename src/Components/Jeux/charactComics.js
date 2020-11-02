import React from 'react'

const Comics = ({ comics, myComics }) => {

    return (
        <div>
            <center><h1>Characters Comics Events</h1></center>
            {comics.map((comic) => (
                <div className="card">
                    <div className="card-body">
                        <h1>{comic.name}</h1>
                        <img src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`} alt="poster" />
                        <p>{comic.description}</p>
                        <p>{comic.comics.items.name}</p>
                    </div>
                </div>
            ))};
            {/* {myComics.map((myComic) => (
                <div>
                    <h1>{myComics.name}</h1>
                    <img src={`${myComic.resourceURI}`} alt="post" />
                </div>

            ))} */}
        </div>
    )
};

export default Comics