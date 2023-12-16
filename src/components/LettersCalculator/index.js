// Write your code here.
import {Component} from 'react'
import './index.css'

class LettersCalculator extends Component {
  state = {searchInput: '', letterCount: 0}

  searchValue = event => {
    this.setState({searchInput: event.target.value})
    this.setState({letterCount: event.target.value.length})
  }

  render() {
    const {searchInput, letterCount} = this.state

    return (
      <div className="main-container">
        <div className="sub-container">
          <div className="content-container">
            <h1 className="heading-style">Calculate the Letters you enter</h1>
            <div className="input-label-container">
              <label htmlFor="inputText" className="label-style">
                Enter the phrase
              </label>
              <input
                type="text"
                placeholder="Enter the phrase"
                className="input-style"
                value={searchInput}
                onChange={this.searchValue}
                id="inputText"
              />
            </div>
            <div className="small-container">
              <p>No.of letters: {letterCount}</p>
            </div>
          </div>

          <img
            className="calculator-style"
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png "
            alt="letters calculator"
          />
        </div>
      </div>
    )
  }
}

export default LettersCalculator
