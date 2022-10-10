import {createSlice, PayloadAction} from '@reduxjs/toolkit'
import {IInitialState} from '../../types/updateApiReducer'
import {IService, IUser} from '../../types/user'

const initialState: IInitialState = {
  service: {_id: '', diagnos: '', price: ''},
  isVisibleService: false,
  patient: {_id: '', avatar: '', fullname: '', phone: ''},
  isVisiblePatient: false,
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
  },
})

export default updateApi.reducer
export const updateApiAction = {...updateApi.actions}
