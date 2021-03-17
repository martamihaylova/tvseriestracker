import './List.css';

const ListSeries = function ({ series }) {
    return (
        <div className="added-hotels">        
            {series.map(x => {
                return <a key={x?.id} href="/login" className="added-hotel">
                    <img src={x.image?.medium} alt=" Shame on DB" className="picture-added-hotel"/>
                    <h4>{x?.name}</h4>
                    <span>{x?.genres.join(', ')}</span>
                </a>
            })}
        </div>
    );
}
export default ListSeries;