export interface SearchOptions {
  query: string;
  type: "track" | "artist" | "track,artist" | "artist,track";
  token: string;
  market?: "US";
  limit?: number;
  offset?: number;
}

export type Statuses = "IDLE" | "LOADING" | "FAILURE" | "SUCCESS";

interface SpotifyItem {
  limit: number;
  next: string | null;
  offset: number;
  previous: string | null;
  total: number;
  href: string;
}

export interface Artists extends SpotifyItem {
  items: {
    external_urls: {
      spotify: string;
    };
    followers: {
      href: null | string;
      total: number;
    };
    genres: string[];
    href: string;
    id: string;
    images: {
      height: number;
      url: string;
      width: number;
    }[];
    name: string;
    popularity: number;
    type: string;
    uri: string;
  }[];
}

export interface Tracks extends SpotifyItem {
  items: {
    album: {
      album_type: string;
      artists: {
        external_urls: {
          spotify: string;
        };
        href: string;
        id: string;
        name: string;
        type: string;
        uri: string;
      }[];
      available_markets: string[];
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      images: { height: number; url: string; width: number }[];
      name: string;
      release_date: string;
      release_date_precision: string;
      total_tracks: number;
      type: string;
      uri: string;
    };
    artists: {
      external_urls: {
        spotify: string;
      };
      href: string;
      id: string;
      name: string;
      type: string;
      uri: string;
    }[];
    available_markets: string[];
    disc_number: number;
    duration_ms: number;
    explicit: boolean;
    external_ids: {
      isrc: string;
    };
    external_urls: {
      spotify: string;
    };
    href: string;
    id: string;
    is_local: boolean;
    name: string;
    popularity: number;
    preview_url: string | null;
    track_number: number;
    type: string;
    uri: string;
  };
}
