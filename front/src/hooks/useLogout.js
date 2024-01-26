import axios from "../api/axios";
import useAuth from "./useAuth";

const useLogout = () => {
    const { setAuth } = useAuth();
    const refreshToken =localStorage.getItem('refreshToken');

    const logout = async () => {
        setAuth({});
        try {
            const response = await axios.post('/user/Logout/', 
            JSON.stringify({refresh: refreshToken}),
            {
                headers:{'Content-Type': 'application/json'},
                credentials:'included'
            });
            console.log(response)
            localStorage.setItem('refreshToken','');

        } catch (err) {
            console.error(err);
        }
    }

    return logout;
}

export default useLogout