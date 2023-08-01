import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  constructor(props) {
    super()
    this.state = {
      suggestionsList: props.suggestionsList,
      searchInput: '',
    }
  }

  onChangeSearchInput = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  render() {
    const {suggestionsList, searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )
    return (
      <div className="bg-container">
        <img
          src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
          alt="google logo"
          className="img-google"
        />
        <div className="searchIn">
          <img
            src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png "
            alt="search icon"
            className="search-icon"
          />
          <input
            type="search"
            placeholder="Search Google"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
          <ul className="list-of-search">
            {searchResults.map(each => (
              <SuggestionItem details={each} key={each.id} />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}
export default GoogleSuggestions
