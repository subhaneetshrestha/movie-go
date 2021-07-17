import { useState, useEffect } from 'react'
import API from '../API'

export const useMovieFetch = (movieId) => {
  const [data, setData] = useState({})
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    // you can put fetchData inside useCallback hook if it is being reused and then call it inside useEffect
    const fetchData = async () => {
      try {
        setLoading(true)
        setError(false)

        const movieDetails = await API.fetchMovie(movieId)
        const credits = await API.fetchCredits(movieId)
        // Get directors only
        const directors = credits.crew.filter(
          (member) => member.job === 'Director'
        )

        setData({
          ...movieDetails,
          actors: credits.cast,
          directors,
        })
        setLoading(false)
      } catch (error) {
        setError(true)
      }
    }
    fetchData()
  }, [movieId])

  return { data, loading, error }
}

export default useMovieFetch
