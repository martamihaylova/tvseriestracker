import './SearchForm.css'
import * as getServis from '../../services/getSeries';

const Searchform = () => {
    return (
        <form onSubmit={getServis.handleSearch} className="search-form">
            <label htmlFor="keyword">Search word</label>
            <input type="text" name="keyword" id="keyword" />
            <input id="btn" type="submit" value="Search" />
        </form>
    )
}
export default Searchform;