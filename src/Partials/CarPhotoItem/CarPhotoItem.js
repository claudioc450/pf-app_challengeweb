import { useState } from 'react';
import CarPhotoDetail from '../CarPhotoDetail/CarPhotoDetail';

const CarPhotoItem = ({ url, title }) => {

    const [modalOpen, setModalOpen] = useState(false);

    const OpenModal = () => {
        setModalOpen(true);
    }

    const CloseModal = () => {
        setModalOpen(false);
    }

    return (
        <div className="main">
            <img src={url + '_2.jpg'} alt="" onClick={OpenModal.bind(this)}></img>
            {modalOpen
                ? <CarPhotoDetail closeModal={CloseModal.bind(this)} url={url + '_27.jpg'} title={title} />
                : ''}
        </div>
    );
}

export default CarPhotoItem;