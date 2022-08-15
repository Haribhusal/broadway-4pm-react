import React from 'react'
import { useState, useEffect } from "react";
import { Spinner } from 'react-bootstrap'

const PhotoAlbum = () => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/photos`
                );
                if (!response.ok) {
                    throw new Error(
                        `This is an HTTP error: The status is ${response.status}`
                    );
                }
                let actualData = await response.json();
                setData(actualData);
                setError(null);
            } catch (err) {
                setError(err.message);
                setData(null);
            } finally {
                setLoading(false);
            }
        }
        getData()
    }, [])

    console.log(data)
    console.log(loading)


    return (

        <section className="albumsection">
            <div className="container">
                <div className="row">
                    {loading ?
                        (<Spinner animation="border" role="status">
                            <span className="visually-hidden">Loading...</span>
                        </Spinner>)
                        :
                        data.slice(0, 8).map((item) => (
                            <div key={item.id} className="col-sm-3 boxImage">

                                <img style={{ width: '100%' }} className="d-block" src={item.thumbnailUrl} alt="" />
                                <h5 className='mb-4 mt-3'>
                                    {item.title}
                                </h5>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section >
    )
}

export default PhotoAlbum