// Config
import { POSTER_SIZE, BACKDROP_SIZE, IMAGE_BASE_URL } from '../config'

// Components
import HeroImage from './HeroImage/HeroImage.component'

// hooks
import { useFetch } from '../hooks/useFetch'

// Image
import NoImage from '../images/no_image.jpg'
import Grid from './Grid/Grid.component'
import Thumb from './Thumb/Thumb.component'
import Spinner from './Spinner/Spinner.component'
import SearchBar from './SearchBar/SearchBar.component'
import Button from './Button/Button.component'

const Home = () => {
  const { data, loading, error, setSearchTerm, searchTerm, setIsLoadingMore } =
    useFetch()
  const heroMovie = data.results[0] ? data.results[0] : null

  if (error) return <div>Something went wrong....</div>
  return (
    <>
      {!searchTerm && heroMovie && (
        <HeroImage
          image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${heroMovie.backdrop_path}`}
          title={heroMovie.original_title}
          text={heroMovie.overview}
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {data.results.map(({ title, id, poster_path }) => (
          <Thumb
            key={id}
            clickable
            image={
              poster_path ? IMAGE_BASE_URL + POSTER_SIZE + poster_path : NoImage
            }
            movieId={id}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {data.page < data.total_pages && !loading && (
        <Button text='Load More' callback={() => setIsLoadingMore(true)} />
      )}
    </>
  )
}

export default Home
