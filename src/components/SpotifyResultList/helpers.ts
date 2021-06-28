import { Albums, Artists, SpotifyTypes, Tracks, Type } from 'types'
import { Props as ItemProps } from '../SpotifyResultItem'

type Items = {
  [key in Type]: () => ItemProps[]
}

const setTracks = ({ items }: Tracks): ItemProps[] => {
  return items.map(({ album, id, external_urls, name, artists }) => {
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
}

const setArtists = ({ items }: Artists): ItemProps[] => {
  return items.map(({ external_urls, images, name, id }) => {
    const previewImage = images.find((img) => img.url)?.url || ''

    return {
      href: external_urls.spotify,
      previewImage,
      id,
      artists: name
    }
  })
}

const setAlbums = ({ items }: Albums): ItemProps[] => {
  return items.map(
    ({
      external_urls,
      id,
      images,
      name,
      release_date: releaseDate,
      total_tracks: totalTracks
    }) => {
      const previewImage = images.find((img) => img.url)?.url || ''
      return {
        href: external_urls.spotify,
        id,
        previewImage,
        name,
        releaseDate,
        totalTracks
      }
    }
  )
}

const setItemsProps = (data: SpotifyTypes, type: Type): ItemProps[] => {
  const items: Items = {
    track: () => setTracks(data as Tracks),
    artist: () => setArtists(data as Artists),
    album: () => setAlbums(data as Albums),
    episode: () => [],
    playlist: () => [],
    show: () => []
  }

  return items[type]()
}

export const filteredItemsProps = (data: SpotifyTypes, type: Type) => {
  return setItemsProps(data, type).filter(({ previewImage }) => previewImage)
}
