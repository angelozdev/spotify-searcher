import axios from "axios";
import { SearchOptions } from "types";

async function search({
  query,
  type,
  market,
  limit,
  offset,
  token,
}: SearchOptions) {
  return axios({
    method: "GET",
    baseURL: "https://api.spotify.com/v1/",
    url: "search",
    params: {
      q: query,
      type,
      market,
      limit,
      offset,
    },
    headers: { Authorization: `Bearer ${token}` },
  }).then(({ data }) => data);
}

export default search;
