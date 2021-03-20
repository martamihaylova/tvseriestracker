import './List.css';
import { Link } from 'react-router-dom';

const ListSeries = function ({ series }) {
    return (
        <div className="random-shows">
            {series.map(x => {
                return <Link key={x?.id} to="/login" className="random-series">
                    <img src={x.image?.medium} alt=" Shame on DB" className="picture-random-series" />
                    <h3>{x?.name}</h3>
                    <span>{x?.genres?.join(', ')}</span>
                </Link>
            })}
        </div>
    );
}
export default ListSeries;