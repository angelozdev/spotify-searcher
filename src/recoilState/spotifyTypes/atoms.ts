import { atom } from "recoil";

export const spotifyTypesAtom = atom<string[]>({
  default: [],
  key: "spotifyTypesAtom",
});
