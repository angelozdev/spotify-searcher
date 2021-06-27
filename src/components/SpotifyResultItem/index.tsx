import {
  Container,
  Details,
  Image,
  Link,
  Strong,
  Text,
} from "./spotifyResultItem.styles";

interface Props {
  previewImage: string;
  href: string;
  name: string;
  artist: string;
}

function SpotifyResultItem({ previewImage, href, name, artist }: Props) {
  return (
    <Container>
      <Image width="300" src={previewImage} alt="" />
      <Link href={href} target="_blank">
        <Details>
          <Text>
            <Strong>Nombre: </Strong> {name}
          </Text>
          <Text>
            <Strong>Artistas: </Strong> {artist}
          </Text>
        </Details>
      </Link>
    </Container>
  );
}

export default SpotifyResultItem;
