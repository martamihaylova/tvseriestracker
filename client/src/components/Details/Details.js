import './Details.css';
import ReactHtmlParser from 'react-html-parser';
import { useEffect, useState } from 'react';
import * as getService from '../../services/getSeries';

import Logotext from '../Logo/LogoText';
import Navigation from '../Navigation/Navigation';
import Trackbtn from '../Trackbtn/Trackbtn';
import Infolist from '../Infolist/Infolist';


const Details = ({ match }) => {
    let [show, setShow] = useState({});
    useEffect(() => {
        getService.getOne(match.params.id)
            .then(res => setShow(res));
    }, [match]);
    console.log(show);

    return (
        <div className="details-view">
            <Navigation />
            <div className="logo-text">
                <Logotext />
            </div>
            <div className="divs">
                <span id="image" style={{ backgroundImage: `url("${show.image?.original}")` }}>
                    <Trackbtn />
                </span>
                <span id="summary">{ReactHtmlParser(show.summary)}</span>
                <div id="info">
                <Infolist info={[show.rating?.average, show.network?.name, show.network?.country.name, show.premiered, show.status]} />
                </div>
            </div>
            <div className="official-site">
                <a href={show.officialSite || 'https://www.tvmaze.com'} id="site-link">
                    {show.officialSite || 'https://www.tvmaze.com'}
                </a>
            </div>
        </div>

    );

}

export default Details;