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
}

function SpotifyResultItem({
  previewImage,
  href,
  name,
  artists,
  releaseDate
}: Props) {
  const objectDetails = {
    name,
    artists,
    releaseDate
  }

  return (
    <Container>
      <Image height="300" src={previewImage} alt={artists || name} />
      <Link href={href} target="_blank">
        <Details>
          {Object.entries(objectDetails).map(([key, value]) => {
            if (!value || !spotifyDetails[key]) return null
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
