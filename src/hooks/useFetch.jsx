import { useState, useEffect } from 'react'

import API from '../API'

const initialState = {
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
}

export const useFetch = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [data, setData] = useState(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)
  const [isLoadingMore, setIsLoadingMore] = useState(false)

  const fetchMovies = async (page, searchTerm = '') => {
    try {
      setError(false)
      setLoading(true)

      const movies = await API.fetchMovies(searchTerm, page)
      setData((prev) => ({
        ...movies,
        results:
          page > 1 ? [...prev.results, ...movies.results] : [...movies.results],
      }))
    } catch (error) {
      setError(true)
    }
    setLoading(false)
  }

  // Initial and search
  useEffect(() => {
    setData(initialState)
    fetchMovies(1, searchTerm)
  }, [searchTerm])

  // Load more movies
  useEffect(() => {
    if (!isLoadingMore) return
    fetchMovies(data.page + 1, searchTerm)
    setIsLoadingMore(false)
  }, [isLoadingMore, searchTerm, data.page])

  return {
    data,
    loading,
    error,
    setSearchTerm,
    setIsLoadingMore,
    searchTerm,
  }
}
