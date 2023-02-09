import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            searchTerm: ''
        }
        this.search = this.search.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
    }

    search() {
        this.props.onSearch(this.state.searchTerm);
    }
    
    handleSearchChange(event) {
        this.setState({searchTerm: event.target.value});
    }

    render() {
        return (
            <div className="SearchBar">
                <input placeholder="Enter A Song, Album, or Artist" onChange={this.handleSearchChange}/>
                <button className="SearchButton" onClick={this.search}>SEARCH</button>
            </div>
        )
    }

}

export default SearchBar;