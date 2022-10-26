import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface IUserInfo {
  _id: string
  role: string
  login: string
}
interface IInitialState {
  token: string
  userInfo: IUserInfo
  isAuth: boolean
}

const initialState: IInitialState = {
  token: '',
  userInfo: {_id: '', role: '', login: ''},
  isAuth: false,
}

export const authReducer = createSlice({
  name: 'authReducer',
  initialState,
  reducers: {
    setToken: (state, action: PayloadAction<string>) => {
      state.token = action.payload
    },

    setUserInfo: (state, action: PayloadAction<IUserInfo>) => {
      state.userInfo = {...action.payload}
    },

    auth: (state, action: PayloadAction<boolean>) => {
      state.isAuth = action.payload
    },
  },
})

export default authReducer.reducer
export const authAction = {...authReducer.actions}
