// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {details} = props
  const {suggestion} = details

  return (
    <li className="user-card-container">
      <p className="user-name"> {suggestion} </p>
      <img
        src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
        className="profile-pic"
        alt="arrow"
      />
    </li>
  )
}

export default SuggestionItem
