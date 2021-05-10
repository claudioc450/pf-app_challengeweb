import './CarPhotoDetail.css';

const CarPhotoDetail = ({ closeModal, url, title }) => {

    return (
        <div>
            <section className="modal-main">
                <div className="header">
                    <h1>Car Detail</h1>
                </div>
                <div className="title">
                    <h3>{title}</h3>
                </div>
                <img src={url} alt=""></img>
                <button type="button" onClick={closeModal}>
                    Close
                </button>
            </section>
        </div>
    );
};

export default CarPhotoDetail;