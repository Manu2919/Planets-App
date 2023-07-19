import Slider from 'react-slick'
import PlanetItem from '../PlanetItem'
import './index.css'

const PlanetSlider = props => {
  const {planetsList} = props
  const options = {
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  }

  return (
    <div className="app-container" data-testid="planets">
      <h1 className="heading">Planets</h1>
      <Slider {...options}>
        {planetsList.map(planet => (
          <PlanetItem key={planet.id} planetDetails={planet} />
        ))}
      </Slider>
    </div>
  )
}

export default PlanetSlider
