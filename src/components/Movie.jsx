import { useParams } from 'react-router-dom'

import { IMAGE_BASE_URL, POSTER_SIZE } from '../config'

//Components
import Grid from './Grid/Grid.component'
import Spinner from './Spinner/Spinner.component'

//Hooks
import useMovieFetch from '../hooks/useMovieFetch'
//Imagr
import NoImage from '../images/no_image.jpg'

const Movie = () => {
  const { movieId } = useParams()
  const { data: movie, loading, error } = useMovieFetch(movieId)
  console.log(movie)
  return (
    <>
      <div>Movie</div>
    </>
  )
}

export default Movie
