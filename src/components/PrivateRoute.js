import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import { selectIsLogin, selectRefreshUser } from "redux/selectors";

export const PrivateRoute = ({component: Component, redirectTo="/"}) => {
   const isLogin = useSelector(selectIsLogin);
   const isRefresh = useSelector(selectRefreshUser);
   const shouldRedirect = !isLogin && !isRefresh;

   return shouldRedirect ? <Navigate to={redirectTo} /> : Component;
};
