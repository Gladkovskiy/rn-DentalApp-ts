import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IInitialState} from '../../types/updateApiReducer'
import {IService, IUser, IUserInfo} from '../../types/user'

const initialState: IInitialState = {
  service: {_id: '', diagnos: '', price: ''},
  isVisibleService: false,
  patient: {_id: '', avatar: '', fullname: '', phone: ''},
  isVisiblePatient: false,
  apointment: {
    _id: '',
    dentNumber: 0,
    time: '',
    price: '',
    patient: {_id: '', avatar: '', fullname: '', phone: ''},
    service: {_id: '', diagnos: '', price: ''},
  },
  isVisibleApoinment: false,
}

//иммутабельность, не надо разворачивать state
export const updateApi = createSlice({
  name: 'updateApi',
  initialState,
  reducers: {
    setService: (state, action: PayloadAction<IService>) => {
      state.service = {...action.payload}
    },
    setVisibleService: state => {
      state.isVisibleService = true
    },
    resetVisibleService: state => {
      state.isVisibleService = false
    },

    setPatient: (state, action: PayloadAction<IUser>) => {
      state.patient = {...action.payload}
    },
    setVisiblePatient: state => {
      state.isVisiblePatient = true
    },
    resetVisiblePatient: state => {
      state.isVisiblePatient = false
    },

    setApoinment: (state, action: PayloadAction<IUserInfo>) => {
      state.apointment = {...action.payload}
    },
    setVisibleApoinment: state => {
      state.isVisibleApoinment = true
    },
    resetVisibleApoinment: state => {
      state.isVisibleApoinment = false
    },
  },
})

export default updateApi.reducer
export const updateApiAction = {...updateApi.actions}
