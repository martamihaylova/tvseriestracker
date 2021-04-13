import { useContext } from 'react';
import AuthContext from '../contexts/AuthContext';

const isAuth = (WarpedComp) => {
    const Warper = (props) => {
        const userCredentials = useContext(AuthContext);
        console.log(userCredentials);
        if (!userCredentials.userId) {
            props.history.push('/');
            return null;
        }
        return <WarpedComp {...props} />
    }
    return Warper;
}

export default isAuth;