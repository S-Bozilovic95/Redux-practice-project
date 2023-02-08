import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store/auth-slice";
import classes from "./Header.module.css";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.authentication);
  const dispatch = useDispatch();

  const logOutHandler = () => {
    dispatch(authActions.logout());
  };

  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      {isAuthenticated && (
        <nav>
          <ul>
            <li>
              <a href="/">My Products</a>
            </li>
            <li>
              <a href="/">My Sales</a>
            </li>
            <li>
              <button onClick={logOutHandler}>Logout</button>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
