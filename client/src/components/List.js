import './List.css';
const ListSeries = function ({ series }) {
    console.log(series);
    return (
        <div className="added-hotels">
        
            {series.map(x => {
                console.log(x);
                return <a key={x.id} href="/details" className="added-hotel">
                    <img src={x.image?.medium} alt="" className="picture-added-hotel"/>
                    <h4>{x.name}</h4>
                    <span>{x.genres.join(', ')}</span>
                </a>
            })}
        </div>
    )
}
export default ListSeries;