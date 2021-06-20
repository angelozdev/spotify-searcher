import axios from "axios";
import { EnvironmentVariables } from "consts";
import { objectToParams } from "utils";

async function spotifyAuth(code: string) {
  const { REDIRECT_URI, CLIENT_ID, SECRET_ID } = EnvironmentVariables;
  const params = {
    code,
    grant_type: "authorization_code",
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    client_secret: SECRET_ID,
  };

  const searchParams = objectToParams(params);

  return axios({
    method: "POST",
    baseURL: "https://accounts.spotify.com/api/token",
    data: searchParams,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }).then(({ data }) => {
    return data;
  });
}

export default spotifyAuth;
