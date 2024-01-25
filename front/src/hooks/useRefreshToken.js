import axios from '../api/axios';
import useAuth from './useAuth';
const useRefreshToken = () => {
    const { setAuth } = useAuth();
    const { auth } = useAuth();
    const refreshToken = JSON.parse(localStorage.getItem('refreshToken'));
    const refresh = async () => {

        

        const response = await axios.post('/user/token/refresh/', 
        JSON.stringify({refresh: refreshToken})
            ,
            {
                headers:{'Content-Type': 'application/json'},
                credentials: 'include'
            }
            

        );
        const refresh=response.data.refresh;
        const accessToken=response.data.access;
        const roles=[2001,1984,5150];
        setAuth(prev => {
            
            return { ...prev,roles:roles, accessToken: accessToken,refreshToken:refresh }
        });
        console.log(auth)


        

        return response.data.access;
    }
    return refresh;
};

export default useRefreshToken;