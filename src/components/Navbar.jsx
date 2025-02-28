import { Link } from 'react-router-dom'
import userIcon from '../assets/user.png'
import { useContext } from 'react'
import { AuthContext } from '../provider/AuthProvider'
import { getAuth, signOut } from 'firebase/auth'
const Navbar = () => {
    const auth = getAuth()
    const logout = () => {
        signOut(auth)
            .then(() => {
                // Sign-out successful.
            })
            .catch((error) => {
                console.log('🚀 ~ signOut ~ error:', error)
            })
    }
    const { user } = useContext(AuthContext)

    return (
        <div className="flex justify-between items-center">
            <div className="">{user?.email}</div>
            <div className="nav space-x-5">
                <Link to="/">Home</Link>
                <Link to="/career">Career</Link>
                <Link to="/about">About</Link>
            </div>
            <div className="login flex gap-2 items-center">
                <div className=" ">
                    <img src={userIcon} alt="" />
                </div>

                {user?.email ? (
                    <button onClick={logout}>Log out</button>
                ) : (
                    <a href="/auth/login">Login</a>
                )}
            </div>
        </div>
    )
}

export default Navbar
