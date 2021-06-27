import { List, Container } from "./spotifyResultList.styles";
import { Wrapper, SpotifyResultItem as Item } from "components";
import { Tracks } from "types";

function SpotifyResultList({ data, title }: { data?: Tracks; title: string }) {
  if (!data) return null;
  return (
    <Container>
      <Wrapper>
        <h1>{title}</h1>
        <List>
          {data.items.map((item) => {
            const { album, id, external_urls, name, artists } = item;
            const previewImage = album.images.find((img) => img.url)?.url;
            const artistName = artists.map((artist) => artist.name).join(", ");
            if (!previewImage || !artistName) return;
            return (
              <Item
                key={id}
                previewImage={previewImage}
                href={external_urls.spotify}
                name={name}
                artist={artistName}
              />
            );
          })}
        </List>
      </Wrapper>
    </Container>
  );
}

export default SpotifyResultList;
