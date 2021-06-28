import { formatDate, hasAComma } from 'utils'

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
  }
}
export default details
