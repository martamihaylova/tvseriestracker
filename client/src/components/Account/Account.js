import './Account.css';

import Navigation from '../Navigation/Navigation';
import Logotext from '../Logo/LogoText';
import Collection from './Collection';

import { useEffect, useState } from 'react';
import getUser from '../../services/getUser';
import getUsersCollection from '../../services/getUsersClloection';

const Account = function (props) {
    const [user, setUser] = useState({});
    const [series, setSeries] = useState([]);
    useEffect(() => {
        getUser(props.match.params.id)
            .then((result) => {
                // console.log(result);
                setUser(result);
                getUsersCollection(result.shows)
                    .then((shows) => {
                        // console.log(shows);
                        setSeries(shows);
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }, [props]);

    return (
        <div className="home-page">
            <Navigation />
            <div className="home-logo-text">
                <Logotext />
            </div>
            {series.length > 0 ? (
                <div className="collection-body">
                    <Collection data={series} shows={user.shows} />
                </div>
            ) : (
                <div>
                    <h1>Have nothing tracked yet?</h1>
                    <h1>You can stare at some random shows in the home section
                         or search for favorites.</h1>
                    <h1>Happy wasting time!</h1>
                </div>
            )
            }
        </div>
    )
}
export default Account;