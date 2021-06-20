import axios from "axios";
import { EnvironmentVariables } from "consts";
import { objectToParams } from "utils";

interface Response {
  accessToken: string;
  expiresIn: number;
  refreshToken: string;
  tokenType: string;
}

interface Options {
  code?: string;
  refresh_token?: string;
}

interface Params {
  grant_type: string;
  redirect_uri?: string;
  client_id?: string;
  client_secret?: string;
  refresh_token?: string;
  code?: string;
}

async function getTokens({ code, refresh_token }: Options): Promise<Response> {
  const { REDIRECT_URI, CLIENT_ID, SECRET_ID } = EnvironmentVariables;
  let params: Params = {
    grant_type: "authorization_code",
    redirect_uri: REDIRECT_URI,
    client_id: CLIENT_ID,
    client_secret: SECRET_ID,
  };

  if (refresh_token) {
    params = { ...params, refresh_token };
  }

  if (code) {
    params = { ...params, code };
  }

  if (!refresh_token && !code) {
    throw new Error("Missing a token or code");
  }

  const searchParams = objectToParams(params);

  return axios({
    method: "POST",
    baseURL: "https://accounts.spotify.com/api/token",
    data: searchParams,
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
  }).then(({ data }) => {
    const { refresh_token, access_token, token_type, expires_in } = data;
    return {
      accessToken: access_token,
      refreshToken: refresh_token,
      expiresIn: expires_in,
      tokenType: token_type,
    };
  });
}

export default getTokens;
