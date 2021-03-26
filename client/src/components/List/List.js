import './List.css';
import { Link } from 'react-router-dom';


const ListSeries = function ({series}) {
    console.log(series);
    let mapKey;
 
    return (
        <div className="random-shows">
            {series.map(x => {
               x.show ? mapKey = x.show : mapKey = x;
               console.log(mapKey);
                return <Link key={mapKey.id} to={`/details/${mapKey.id}`} className="random-series" style={{backgroundImage: `url("${mapKey.image?.original}")`}}>
                        <div className="text-warp">
                            <h3>{mapKey.name}</h3>
                            <span>{mapKey.genres?.join(', ')}</span>
                        </div>
                </Link>
            })}
        </div>
    );
}
export default ListSeries;