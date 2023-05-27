import PropTypes from 'prop-types'

export default function ItemPhoto ({photo, onRemove}) {
    return (
        <div className="col-3 position-relative">
            <img src={photo.imgSrc} className="rounded float-start w-100" alt="..."></img>
            <span className="position-absolute top-0 start-100 translate-middle" onClick={() => onRemove(photo)}><span className="material-icons">close</span></span>
        </div>
    )
}

ItemPhoto.propTypes = {

}