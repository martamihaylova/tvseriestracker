import './Details.css';
import ReactHtmlParser from 'react-html-parser';
import { useEffect, useState } from 'react';
import * as getService from '../../services/getSeries';

import Logotext from '../Shared/Logo/LogoText';
import Navigation from '../Shared/Navigation/Navigation';
import Trackbtn from '../Trackbtn/Trackbtn';
import Infolist from '../Infolist/Infolist';


const Details = (props) => {
    const currentUserId = localStorage.getItem('userId');
    if (!currentUserId) props.history.push('/');
    let [show, setShow] = useState({});
    useEffect(() => {
        getService.getOne(props.match.params.id)
            .then(res => {
                res.image ? setShow(res) : props.history.push('/home');
            })
            .catch(err => {
                console.log(err);
                props.history.push('/home');
            })
    }, [props]);

    let infoArray = [show.rating?.average,
    show.network?.name,
    show.network?.country.name,
    show.premiered,
    show.status];

    return (
        <div className="details-view">
            <Navigation />
            <div className="details-logo-text">
                <Logotext />
            </div>
            <div className="divs">
                <span>
                <img id="image" src={show.image?.original} alt=""/>
                <Trackbtn data={[currentUserId, show.id, show.name]} />
                </span>
                <span id="summary">{ReactHtmlParser(show.summary)}</span>
                <div id="info">
                    <Infolist info={infoArray} />
                </div>
            </div>
            <div className="official-site">
                <a href={show.officialSite || show.url} id="site-link">
                    {show.officialSite || show.url}
                </a>
            </div>
        </div>

    );

}

export default Details;