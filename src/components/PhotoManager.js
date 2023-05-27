import PropTypes from 'prop-types'
import {useState} from 'react'
import {nanoid} from 'nanoid'
import ListPhoto from './ListPhoto'

export default function PhotoManager () {
    const [photos, setPhotos] = useState([])

    const fileToDataUrl = file => {
        return new Promise((resolve, reject) => {
          const fileReader = new FileReader();
        
          fileReader.addEventListener('load', evt => {
            resolve(evt.currentTarget.result);
          });
          
          fileReader.addEventListener('error', evt => {
            reject(new Error(evt.currentTarget.error));
          });
          
          fileReader.readAsDataURL(file);
        });
    }
      
    const handleSelect = async (evt) => {
        
          const files = [...evt.target.files];
          const urls = await Promise.all(files.map(o => fileToDataUrl(o)));
          urls.forEach(url => setPhotos(prevPhotos => [...prevPhotos, {
            imgSrc: url,
            id: nanoid()
          }]))

    }

    const handleDelete = (photo) => {
        setPhotos(prevPhotos => {
            return prevPhotos.filter(el => {
                if (photo.id === el.id) return false
                else return true
            })
        })
    }

    return (
        <form className='py-2 form'>
            <div className='container border border-2 rounded'>
                <input type='file' name='addPhotos' className='inputSelect' value='' onChange={handleSelect}/>
                <div className='position-absolute top-50 start-50 translate-middle inputText'>Click to select</div>
            </div>
            <ListPhoto photos={photos} onRemove={handleDelete} />
        </form>
    )
}