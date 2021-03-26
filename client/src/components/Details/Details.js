import './Details.css';
import ReactHtmlParser from 'react-html-parser';
import { useEffect, useState } from 'react';
import * as getService from '../../services/getSeries';

import Logotext from '../Logo/LogoText';
import Navigation from '../Navigation/Navigation';
import Trackbtn from '../Trackbtn/Trackbtn';
import Infolist from '../Infolist/Infolist';


const Details = (props) => {
    let [show, setShow] = useState({});
    useEffect(() => {
        getService.getOne(props.match.params.id)
            .then(res => setShow(res));
    }, [props.match]);
    console.log(props);
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
                <span id="image" style={{ backgroundImage: `url("${show.image?.original}")` }}>
                    <Trackbtn />
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