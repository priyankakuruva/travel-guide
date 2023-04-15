import Loader from 'react-loader-spinner'
import './App.css'
import {Component} from 'react'
import TourItem from './components/TourItem'

// Replace your code here

class App extends Component {
  state = {travelGuideArray: [], isDataFetched: false}

  componentDidMount() {
    this.fetchToursData()
  }

  getFormattedArray = packagesResponse => ({
    description: packagesResponse.description,
    id: packagesResponse.id,
    imageUrl: packagesResponse.image_url,
    name: packagesResponse.name,
  })

  fetchToursData = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const packagesResponse = await response.json()
    console.log(packagesResponse)
    const travelGuideArray = packagesResponse.packages.map(eachPackage =>
      this.getFormattedArray(eachPackage),
    )
    console.log(travelGuideArray)
    this.setState({travelGuideArray, isDataFetched: true})
  }

  displayFetchedData = () => {
    const {travelGuideArray} = this.state
    return (
      <ul className="all-tours-container">
        {travelGuideArray.map(eachTour => (
          <TourItem tourDetails={eachTour} key={eachTour.id} />
        ))}
      </ul>
    )
  }

  displayLoader = () => (
    <div data-testid="loader" className="loader-container">
      <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
    </div>
  )

  render() {
    const {isDataFetched} = this.state
    return (
      <div className="page-main-container">
        <h1 className="travel-guide-heading">Travel Guide</h1>
        {isDataFetched ? this.displayFetchedData() : this.displayLoader()}
      </div>
    )
  }
}

export default App
