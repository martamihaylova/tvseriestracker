import "./Trackbtn.css";
import { useState } from 'react';
import trackingService from '../../services/trackingService';
import getUser from '../../services/getUser';

const Track = ({ data }) => {
    const [userId, showId, showName] = data;
    const [btnName, setBtnName] = useState('Track');
    getUser(userId)
        .then((res) => {
            let found = res.shows.find((x) => x?.id === showId);
            if (found && found?.name) {
             
                setBtnName('Tracked')
            }
        })
        .catch(err => console.log(err))

    const trackingHandler = (e) => {
        trackingService(userId, showId, showName)
        .then(() =>  setBtnName('Tracked'))
    }

    return (
        <div className="trackbtn" >
            <span id='text' onClick={btnName === 'Track' ? trackingHandler : null}>{btnName}</span>
        </div>
    )
}
export default Track;