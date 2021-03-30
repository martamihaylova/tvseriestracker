import "./Trackbtn.css";
import trackingService from '../../services/trackingService';

const Track = ({data}) => {
    console.log(data[0]);
    let show = data[0]
    const trackingHandler = (e) => {
        trackingService(show);
    }
    return (
        <div className="trackbtn" >
            <span id='text' onClick={trackingHandler}>Track</span>
        </div>
    )
}
export default Track;