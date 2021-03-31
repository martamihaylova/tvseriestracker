import './Notifications.css';

function Notifications({type, children}) {
    return (
        <div id="notifications">
            <div id={type} className="notification">
                <span>{children}</span>
            </div>
        </div>
    )
}

export default Notifications;