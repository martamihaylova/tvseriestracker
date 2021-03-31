import "./Trackbtn.css";
import trackingService from '../../services/trackingService';

const Track = ({data}) => {
    let [userId, show] = data;
    const trackingHandler = (e) => {
        // let found = show.find((x) => x?.username.toLowerCase() === name.toLowerCase());
        // if (found) 
        trackingService(userId, show);
    }
    return (
        <div className="trackbtn" >
            <span id='text' onClick={trackingHandler}>Track</span>
        </div>
    )
}
export default Track;