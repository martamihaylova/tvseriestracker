import './Account.css';
import { Link } from 'react-router-dom';

import Navigation from '../Shared/Navigation/Navigation';
import Logotext from '../Shared/Logo/LogoText';
import Collection from './Collection';

import { useEffect, useState } from 'react';
import getUser from '../../services/getUser';
import getUsersCollection from '../../services/getUsersClloection';

const Account = function (props) {
    const [user, setUser] = useState({});
    const [series, setSeries] = useState([]);
    useEffect(() => {
        console.log(props);
        getUser(props.match.params.id)
            .then((result) => {
                setUser(result);
                getUsersCollection(result.shows)
                    .then((shows) => {
                        props.location.pathname.includes('sort') ?
                            sortHandler(shows) :
                            setSeries(shows)
                    })
                    .catch(err => {
                        console.log(err);
                    });
            })
            .catch(err => {
                console.log(err);
            });
    }, [props]);

    function sortHandler(shows) {
        let sortedSeries;
        sortedSeries = shows.sort((a, b) => a.name.localeCompare(b.name));
        setSeries(sortedSeries);
    }

    return (
        <div className="home-page">
            <Navigation currentlocation="account" />
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
                    <h1>You can stare at some random shows in the <Link to="/home" style={{ color: 'darkblue' }}>Home</Link> section
                         or <Link to="/home/search" style={{ color: 'darkblue' }}>Search</Link> for favorites.</h1>
                    <h1>Happy wasting time!</h1>
                </div>
            )
            }
        </div>
    )
}
export default Account;