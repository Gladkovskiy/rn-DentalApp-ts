import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {authAction} from '../store/reducers/asyncStorageReducer'
import {updateApiAction} from '../store/reducers/updateApi'

export const useActionUpdate = () => {
  const dispatch = useDispatch()
  return bindActionCreators(updateApiAction, dispatch)
}

export const useActionAuth = () => {
  const dispatch = useDispatch()
  return bindActionCreators(authAction, dispatch)
}
