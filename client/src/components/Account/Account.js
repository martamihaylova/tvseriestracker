

import Navigation from '../Navigation/Navigation';
import Logotext from '../Logo/LogoText';
import trackingService from '../../services/trackingService';

const Account = function (props) {

    trackingService(props.match.params.id)
        .then(res => console.log(res))

    return (
        <div className="home-page">
            <Navigation />
            <div className="home-logo-text">
                <Logotext />
            </div>
            <div className="cards">

            </div>
        </div>
    )
}
export default Account;