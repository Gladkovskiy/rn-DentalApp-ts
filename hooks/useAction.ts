import {useDispatch} from 'react-redux'
import {bindActionCreators} from 'redux'
import {updateApiAction} from '../store/reducers/updateApi'

export const useActionUpdate = () => {
  const dispatch = useDispatch()
  return bindActionCreators(updateApiAction, dispatch)
}
