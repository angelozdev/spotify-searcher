import { memo } from 'react'

import { List, Container } from './spotifyResultList.styles'
import { Wrapper, SpotifyResultItem as Item } from 'components'
import { Tracks, Type, Artists, SpotifyTypes } from 'types'
import { Props as ItemProps } from '../SpotifyResultItem'
interface Props {
  data?: SpotifyTypes
  title: String
  type: Type
}

const setItemsProps = (data: SpotifyTypes, type: Type): ItemProps[] => {
  switch (type) {
    case 'track': {
      const { items } = data as Tracks
      return items
        .map(({ album, id, external_urls, name, artists }) => {
          const { release_date: releaseDate, images } = album
          const previewImage = images.find((img) => img.url)?.url || ''
          const artistNames = artists.map((artist) => artist.name).join(', ')
          return {
            id,
            previewImage,
            artists: artistNames,
            releaseDate,
            name,
            href: external_urls.spotify
          }
        })
        .filter(({ previewImage }) => previewImage)
    }

    case 'artist':
      const { items } = data as Artists
      return items
        .map(({ external_urls, images, name, id }) => {
          const previewImage = images.find((img) => img.url)?.url || ''

          return {
            href: external_urls.spotify,
            previewImage,
            id,
            artists: name
          }
        })
        .filter(({ previewImage }) => previewImage)

    default:
      throw new Error('[COMPONENTS] SpotifyResultList: invalid type')
  }
}

function SpotifyResultList({ data, title, type }: Props) {
  if (!data) return null

  return (
    <Container>
      <Wrapper>
        <h1>{title}</h1>
        <List>
          {setItemsProps(data, type).map(
            ({ artists, previewImage, releaseDate, href, name, id }) => (
              <Item
                key={id}
                id={id}
                artists={artists}
                previewImage={previewImage}
                releaseDate={releaseDate}
                href={href}
                name={name}
              />
            )
          )}
        </List>
      </Wrapper>
    </Container>
  )
}

export default memo(SpotifyResultList)
