import './SearchForm.css';
import { withRouter } from 'react-router-dom';


const Searchform = (props) => {
    let keyword = '';

    const handleSearch = (e) => {
        e.preventDefault();
        keyword = e.target.keyword.value;
        props.match.params = { keyword };
        return props.history.push(`/home/search/${keyword}`);
    }
    return (
        <form onSubmit={handleSearch} className="search-form">
            <label htmlFor="keyword">Search word</label>
            <input type="text" name="keyword" id="keyword" />
            <input id="btn" type="submit" value="Search" />
        </form>
    )
}
export default withRouter(Searchform);