
import { Button } from 'react-bootstrap'
const CardComponent = ({ imageUrl, title, desc, buttonText }) => {
    return (
        <div className="col-12 col-sm-4 col-md-3">
            <div className="card">
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desc}</p>
                    <Button variant="success">{buttonText}</Button>
                </div>
            </div>
        </div>
    )
}

export default CardComponent;