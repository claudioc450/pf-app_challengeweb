import { useState, useEffect } from 'react';
import CarPhotoItem from '../CarPhotoItem/CarPhotoItem';

const CarPhotoList = () => {

    const [items, setItems] = useState([]);
    const [title, setTitle] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3000")
            .then(res => res.json())
            .then(
                (result) => {
                    const uniqueImages = result.images.reduce((imgUri, item) => {
                        if (!imgUri.includes(item.uri)) {
                            imgUri.push(item.uri);
                        }
                        return imgUri;
                    }, [])
                    setItems(uniqueImages);
                    setTitle(result.title);
                }
            )
    }, []);


    return (
        <div className="root">
            <div className="header">
                <h1>Car Photos</h1>
            </div>
            <div className="photos">
                {items.map((item, i) => (<CarPhotoItem key={i} url={item} title={title} />))}
            </div>
        </div>
    );
}

export default CarPhotoList;