import { useState, useEffect, useRef } from 'react'

import searchIcon from '../../images/search-icon.svg'

import { Wrapper, Content } from './SearchBar.styles'

const SearchBar = ({ setSearchTerm }) => {
  const [searchText, setSearchText] = useState('')
  const initial = useRef(true)
  useEffect(() => {
    if (initial.current) {
      initial.current = false
      return
    }
    const timer = setTimeout(() => {
      setSearchTerm(searchText)
    }, 400)

    return () => clearTimeout(timer)
  }, [setSearchTerm, searchText])
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt='search-icon' />
        <input
          type='text'
          placeholder='Search movie'
          onChange={(e) => setSearchText(e.currentTarget.value)}
          value={searchText}
        />
      </Content>
    </Wrapper>
  )
}

export default SearchBar
