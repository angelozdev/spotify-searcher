import { memo } from 'react'

import { List, Container } from './spotifyResultList.styles'
import { Wrapper, SpotifyResultItem as Item } from 'components'
import { Type, SpotifyTypes } from 'types'
import { filteredItemsProps } from './helpers'
interface Props {
  data?: SpotifyTypes
  title: String
  type: Type
}

function SpotifyResultList({ data, title, type }: Props) {
  if (!data) return null

  return (
    <Container>
      <Wrapper>
        <h1>{title}</h1>
        <List>
          {filteredItemsProps(data, type).map(
            ({
              artists,
              previewImage,
              releaseDate,
              href,
              name,
              id,
              totalTracks,
              followers,
              popularity,
              genres
            }) => (
              <Item
                key={id}
                id={id}
                artists={artists}
                previewImage={previewImage}
                releaseDate={releaseDate}
                href={href}
                name={name}
                totalTracks={totalTracks}
                popularity={popularity}
                followers={followers}
                genres={genres}
              />
            )
          )}
        </List>
      </Wrapper>
    </Container>
  )
}

export default memo(SpotifyResultList)
