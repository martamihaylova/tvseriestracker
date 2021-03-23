import './List.css';
import { Link } from 'react-router-dom';


const ListSeries = function ({ series }) {
    return (
        <div className="random-shows">
            {series.map(x => {
                return <Link key={x?.id} to={`/details/${x.id}`} className="random-series" data={x} style={{backgroundImage: `url("${x.image?.original}")`}}>
                        <div className="text-warp">
                            <h3>{x?.name}</h3>
                            <span>{x?.genres?.join(', ')}</span>
                        </div>
                </Link>
            })}
        </div>
    );
}
export default ListSeries;