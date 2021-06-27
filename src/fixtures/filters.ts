import { Type } from "types";

interface Filter {
  text: string;
  name: Type;
}

const filters: Filter[] = [
  {
    text: "Albumes",
    name: "album",
  },
  {
    text: "Artistas",
    name: "artist",
  },
  {
    text: "Episodios",
    name: "episode",
  },
  {
    text: "Playlists",
    name: "playlist",
  },
  {
    text: "Show",
    name: "show",
  },
  {
    text: "Canciones",
    name: "track",
  },
];

export default filters;
