import './index.css'

const TourItem = props => {
  const {tourDetails} = props
  const {description, imageUrl, name} = tourDetails
  return (
    <li className="each-list-item">
      <img className="tour-image" src={imageUrl} alt={name} />
      <h3 className="package-name">{name}</h3>
      <p className="package-description">{description}</p>
    </li>
  )
}

export default TourItem
