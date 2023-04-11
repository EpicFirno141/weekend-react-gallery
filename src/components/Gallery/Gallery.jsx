import { useState, useEffect } from "react";
import axios from 'axios';

function Gallery() {
    const [pictures, setPictures] = useState([]);

    const fetchPictures = () => {
        axios.get('/gallery').then((response) => {
            setPictures(response.data);
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong.');
        });
    }

    useEffect(() => {
        fetchPictures();
    }, []);

    return (
        <div id='gallery'>
            {pictures.map((picture) => (
                <div>
                    <img src={picture.path} className='picture' />
                </div>
            ))}
        </div>
    );
}

export default Gallery;