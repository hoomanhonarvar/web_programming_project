import axios from '../api/axios';
import useAuth from './useAuth';
const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const{auth}=useAuth();
    const refresh = async () => {
        const response = await axios.post('/user/token/refresh/', 
            // JSON.stringify({ email, password:pwd }),
            //     {
            //         headers: { 'Content-Type': 'application/json' },
            //         credentials: 'include'
            //     }
            JSON.stringify({refresh:auth?.refresh})
            ,
            {
                headers:{'Content-Type': 'application/json'},
                credentials: 'include'
            }
            

        );
        console.log("kir")
        console.log(response);
        setAuth(prev => {
            console.log(JSON.stringify(prev));
            console.log(response.data.accessToken);
            return { ...prev, accessToken: response.data.access,refresh:response.data.refresh }
        });
        return response.data.access;
    }
    return refresh;
};

export default useRefreshToken;