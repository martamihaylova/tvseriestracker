import './Infolist.css';

const Infolist = (props) => {
console.log(props);
console.log(props.info);
        return (
            <div id="info-list">
                <div>Rating: <span className="infospan">{props.info[0]}</span></div>
                <div>Network: <span className="infospan">{props.info[1]}</span></div>
                <div>Status: <span className="infospan">{props.info[2]}</span></div>
                <div>Premiere: <span className="infospan">{props.info[3]}</span></div>
                <div>Status: <span className="infospan">{props.info[4]}</span></div>
            </div >
        )
    
}
export default Infolist;