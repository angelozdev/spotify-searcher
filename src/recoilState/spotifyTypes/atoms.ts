import { atom } from 'recoil'
import { Type } from 'types'

export const spotifyTypesAtom = atom<Type[]>({
  default: ['artist'],
  key: 'spotifyTypesAtom'
})
