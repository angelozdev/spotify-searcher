import { selector } from "recoil";
import { spotifyTypesAtom } from "./atoms";

export const spotifyTypesSelector = selector<string>({
  key: "spotifyTypesSelector",
  get: ({ get }) => {
    const types = get(spotifyTypesAtom);

    return types.join(",");
  },
});
