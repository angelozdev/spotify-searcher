import { atom } from 'recoil'

interface Auth {
  accessToken: string | null
  refreshToken: string | null
  isAuth: boolean
}

export const authAtom = atom<Auth>({
  key: 'authAtom',
  default: {
    refreshToken: null,
    accessToken: null,
    isAuth: false
  }
})
