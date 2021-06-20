import { atom } from "recoil";

export const isAuthenticatedAtom = atom<boolean>({
  key: "isAuthenticated",
  default: false,
});

export const spotifyRefreshTokenAtom = atom<string | null>({
  key: "spotifyRefreshToken",
  default: null,
});

export const spotifyTokenResponseAtom = atom<string | null>({
  key: "spotifyTokenResponse",
  default: null,
});
