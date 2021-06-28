import { ChangeEvent, FormEvent, useState, Fragment } from 'react'
import { useRecoilValue } from 'recoil'

import {
  Container,
  Header,
  SearchForm,
  SearchInput,
  SearchInputContainer
} from './home.styles'
import { Wrapper, Button, Filters, SpotifyResultList } from 'components'
import { useSearch } from 'hooks'
import { spotifyTypesSelector } from 'recoilState/spotifyTypes/selectors'

function Home() {
  // states
  const [searchValue, setSearchValue] = useState('chopin')
  const type = useRecoilValue(spotifyTypesSelector)
  const [{ data, status, error }, getData] = useSearch()

  // helpers methods
  const handleSearchSubmit = (event: FormEvent) => {
    event.preventDefault()
    if (!searchValue || !type) return
    getData({ query: searchValue, type, limit: 6 })
  }

  const handleSearchValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target
    setSearchValue(value)
  }

  return (
    <Fragment>
      <Container>
        <Header
          theme={{
            src: 'https://images.unsplash.com/photo-1459233313842-cd392ee2c388?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=750&q=80'
          }}
        ></Header>
        <Wrapper>
          <SearchForm onSubmit={handleSearchSubmit}>
            <SearchInputContainer>
              <SearchInput
                disabled={status === 'LOADING'}
                type="text"
                placeholder="Busca tu canción favorita..."
                value={searchValue}
                onChange={handleSearchValueChange}
              />
            </SearchInputContainer>
            <Button
              disabled={status === 'LOADING' || !type || !searchValue}
              size="small"
            >
              Buscar...
            </Button>
          </SearchForm>
          <Filters />
          {status === 'LOADING' && <p>Loading...</p>}
          {status === 'FAILURE' && (
            <p style={{ color: 'brown' }}>Error: {error?.message}</p>
          )}
        </Wrapper>
      </Container>

      {status === 'SUCCESS' && (
        <Fragment>
          <SpotifyResultList
            type={'track'}
            title="Canciones"
            data={data?.tracks}
          />
          <SpotifyResultList
            type={'artist'}
            title="Artistas"
            data={data?.artists}
          />
          <SpotifyResultList
            type={'album'}
            title="Albumes"
            data={data?.albums}
          />
        </Fragment>
      )}
    </Fragment>
  )
}

export default Home
