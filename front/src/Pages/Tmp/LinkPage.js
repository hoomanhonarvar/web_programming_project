import { useNavigate,Link } from "react-router-dom"
const LinkPage = () => {
    
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
            
        </section>
    )
}

export default LinkPage