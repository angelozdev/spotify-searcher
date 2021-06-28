import { spotifyDetails } from 'fixtures'

import {
  Container,
  Details,
  Image,
  Link,
  Strong,
  Text
} from './spotifyResultItem.styles'

export interface Props {
  previewImage: string
  href: string
  name?: string
  artists?: string
  releaseDate?: string
  id: string
  totalTracks?: number
  popularity?: number
  followers?: number
  genres?: string
}

function SpotifyResultItem({
  previewImage,
  href,
  name,
  artists,
  releaseDate,
  totalTracks,
  followers,
  popularity,
  genres
}: Props) {
  const objectDetails = {
    artists,
    name,
    releaseDate,
    totalTracks,
    followers,
    popularity,
    genres
  }

  return (
    <Container>
      <Image
        loading="lazy"
        height="300"
        src={previewImage}
        alt={artists || name || genres}
      />
      <Link href={href} target="_blank">
        <Details>
          {Object.entries(objectDetails).map(([key, value]) => {
            if (!value || !spotifyDetails[key]) return null
            if (typeof value === 'number') {
              value = value.toString()
            }

            return (
              <Text key={key}>
                <Strong>{spotifyDetails[key].title(value)}</Strong>
                <span>{spotifyDetails[key].text(value)}</span>
              </Text>
            )
          })}
        </Details>
      </Link>
    </Container>
  )
}

export default SpotifyResultItem
