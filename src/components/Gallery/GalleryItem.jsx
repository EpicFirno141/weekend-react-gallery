import axios from 'axios';
import { useState } from 'react';

function GalleryItem({picture, fetchPictures}) {
    const [pictureStatus, setPictureStatus] = useState(false);

    const addLike = () => {
        axios.put(`/gallery/like/${picture.id}`).then((response) => {
            fetchPictures();
        }).catch((error) => {
            console.log(error);
            alert('Something went wrong.');
        });
    }

    const swapClick = () => {
        setPictureStatus(!pictureStatus);
    }
    
    if(pictureStatus === false) {
        return (
            <div className='picture'>
                <img src={picture.path} onClick={swapClick} />
                <p>Likes: {picture.likes}</p>
                <button onClick={addLike}>Like</button>
            </div>
        );
    } else {
        return (
            <div className='picture'>
                <p className='description' onClick={swapClick}>{picture.description}</p>
                <p>Likes: {picture.likes}</p>
                <button onClick={addLike}>Like</button>
            </div>
        );
    }
}

export default GalleryItem;