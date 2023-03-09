import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Header = () => {

    const auth = useSelector((state) => state.auth);
    console.log(auth);
    const dispatch = useDispatch();

    const handleLogin = () => {
        dispatch({ type: 'Login' })
    }

    const handleLogout = () => {
        dispatch({ type: 'Logout' })
    }
    return (
        <div>
            {/*<p>{auth}</p>*/}
            <button onClick={handleLogin}>Log in</button>
            <button onClick={handleLogout}>Log out</button>
        </div>
    )
}

export default Header
