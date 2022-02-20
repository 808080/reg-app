import { setUserError, setUserSuccess } from '../reducers/user';
import { getUser } from '../../utils/user';

export const fetchUser = () => async (dispatch) => {
	const user = await getUser();
	dispatch(user ? setUserSuccess(user) : setUserError());
};