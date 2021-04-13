import './Collection.css';
import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';

import AuthContext from '../../contexts/AuthContext';
import untrackService from '../../services/untrackService';

const Collection = function ({ data, shows }) {
    const {userId} = useContext(AuthContext);
    let history = useHistory();
    const untrackHandler = (e) => {
        if (e.target.className === 'btnText') {
            let found = shows.find(x => x.id == e.target.id);
            console.log(found);
            untrackService(userId, found)
                .then((res) => {
                    console.log(res);
                    history.push(`/account/${userId}`)
                })
                .catch(err => console.log(err))
        }
    }
    return (
        <div className="collection-cards">
            {data?.map(x => {
                return <div key={x.id} className="collection-card" >
                    <Link to={`/details/${x.id}`} >
                        <img id="collection-image" src={x.image?.medium} alt="" />
                    </Link>
                    <div id="collection-text">{x.name}</div>
                    <div className="untrackbtn" >
                        <span className='btnText' id={x.id} onClick={untrackHandler} >Untrack</span>
                    </div>
                </div>
            })}
        </div>
    );
}
export default Collection;