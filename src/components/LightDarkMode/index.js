// Write your code here onClick={this.changeMode} const {lightMode} = this.statestate = {isDarkMode: false}
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {lightMode: true}

  changeMode = () => {
    this.setState(prevState => ({lightMode: !prevState.lightMode}))
  }

  getButtonText = () => {
    const {lightMode} = this.state
    return lightMode ? 'Light Mode' : 'Dark Mode'
  }

  render() {
    const buttonText = this.getButtonText()

    return (
      <div className="bg-container">
        <div className="bg-container2 ">
          <h1 className="heading">Click To Change Mode</h1>
          <button onClick={this.changeMode} className="button" type="button">
            {buttonText}
          </button>
        </div>
      </div>
    )
  }
}

export default LightDarkMode
