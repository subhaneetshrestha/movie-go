import { Image } from './Thumb.styles'
import { Link } from 'react-router-dom'

const Thumb = ({ image, movieId, clickable }) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt='movie-image' />
      </Link>
    ) : (
      <Image src={image} alt='movie-image' />
    )}
  </div>
)

export default Thumb
