import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { UserLogout } from '../redux/actions'

const Navbar = () => {
    const user = useSelector((state: any) => state.User)

    const dispatch = useDispatch()

    const logout = () => {
        localStorage.removeItem('user')
        localStorage.removeItem('accessToken')
        dispatch(UserLogout())
    }

    return (
        <nav className="navbar navbar-expand navbar-dark bg-dark">
            <Link to={"/"} className="navbar-brand">
                V7 - TEST
            </Link>
            {user?.UserData?.token ? (
                <div className="navbar-nav ml-auto">
                    <div className="nav-link" onClick={() => logout()}>
                        Logout
                    </div>
                </div>
            ) : (
                <div className="navbar-nav ml-auto">
                    <li className="nav-item">
                        <Link to={"/login"} className="nav-link">
                            Sign In
                        </Link>
                    </li>

                    <li className="nav-item">
                        <Link to={"/register"} className="nav-link">
                            Sign Up
                        </Link>
                    </li>
                </div>
            )}

        </nav>
    )
}

export default Navbar