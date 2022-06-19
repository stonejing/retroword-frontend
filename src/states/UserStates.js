import { atom } from 'recoil';

export const authActionState = atom({
  key: 'authActionState',
  default: 'login'
})

export const authIsAuthenticateState = atom({
  key: 'authIsAuthenticate',
  default: false
})

export const authDialogState = atom({
  key: 'authDialogState',
  default: false
})


export const authAccessTokenState = atom({
  key: 'authAccessToken',
  default: '',
})

export const authReturnDataState = atom({
  key: 'user',
  default: {}
})
