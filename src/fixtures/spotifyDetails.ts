import { formatDate, formatNumber, hasAComma } from 'utils'

interface Details {
  [key: string]: {
    title: (option: string) => string
    text: (option: string) => string
  }
}

const details: Details = {
  artists: {
    title: (artists) => `Artista${hasAComma(artists) ? 's' : ''}: `,
    text: (artists) => artists
  },
  name: {
    title: () => 'Nombre: ',
    text: (name) => name
  },
  releaseDate: {
    title: () => 'Año: ',
    text: (releaseDate) => formatDate(releaseDate, { year: 'numeric' })
  },
  totalTracks: {
    title: () => 'Número de pistas: ',
    text: (number) => number
  },
  popularity: {
    title: () => 'Popularidad: ',
    text: (number) => number + '%'
  },
  followers: {
    title: () => 'Seguidores: ',
    text: (number) => formatNumber(number)
  },
  genres: {
    title: (genres) => `Género${hasAComma(genres) ? 's' : ''}: `,
    text: (genres) => genres + '.'
  }
}
export default details
