import { useSelector, useDispatch } from 'react-redux';

import { selectUser } from 'redux/selectors';
import { logOut } from 'redux/auth/auth-operations';
import { LogOut, Mail, Item } from './UserMenu.styled';

const UserMenu = () => {
  const {email} = useSelector(selectUser);
  const dispatch = useDispatch();

  const handleLogOut = () => {
      dispatch(logOut());
  };

  return (
      <Item>
        <Mail>Hello, {email}!</Mail>
        <LogOut type='button' onClick={handleLogOut}></LogOut>
      </Item>
  );
};

export default UserMenu;