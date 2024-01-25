import { useNavigate,Link } from "react-router-dom"
import useLogout from "../../hooks/useLogout";
const LinkPage = () => {
    const navigate = useNavigate();
    const logout = useLogout();

    const signOut = async () => {
        await logout();
        navigate('/linkpage');
    }
    return (
        <section>
            <h1>Links</h1>
            <br />
            <h2>Public</h2>
            <Link to="/Login">Login</Link>
            <Link to="/sign-up">Register</Link>
            <br />
            <h2>Private</h2>
            <Link to="/">Home</Link>
            <Link to="setting">setting</Link>
            <Link to="order">Orders</Link>
            <div className="flexGrow">
                <button onClick={signOut}>Sign Out</button>
            </div>
        </section>
    )
}

export default LinkPage