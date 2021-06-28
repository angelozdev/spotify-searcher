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
}

function SpotifyResultItem({
  previewImage,
  href,
  name,
  artists,
  releaseDate,
  totalTracks
}: Props) {
  const objectDetails = {
    name,
    artists,
    releaseDate,
    totalTracks
  }

  return (
    <Container>
      <Image height="300" src={previewImage} alt={artists || name} />
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
