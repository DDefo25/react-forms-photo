import PropTypes from 'prop-types'
import ItemPhoto from './ItemPhoto'

export default function ListPhoto ({photos, onRemove}) {
    return (
        <div className="row align-items-start p-3">
            {photos.map(photo => <ItemPhoto key={photo.id} photo={photo} onRemove={onRemove} />)}
        </div>
    )
}

ListPhoto.propTypes = {

}