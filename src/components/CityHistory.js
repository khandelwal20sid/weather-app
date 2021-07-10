import React, { Component } from 'react'
import CityCard from './CityCard'
import Error404 from './Error404'

class CityHistory extends Component {
    
    constructor(props) {
        super(props)
    
        this.state = {
             cities:[]
        }
    }
    
    componentDidMount(){
        const data = this.props.location.aboutProps;
        if ( data == null) {
           return <Error404 />
        }
        this.setState({
            cities: this.props.location.aboutProps.cities
        })
    }

    render() {                
        return (
            <div>
                <div className="jumbotron bg-warning">
                    <div className="display-3">History...</div>
                </div>
                {this.state.cities.map(city=> {
                    return(                        
                        <CityCard
                            city={city.cityName}
                            country={city.country}
                            main={city.main}
                            description={city.description}
                            temp={city.temp}
                            temp_min={city.temp_min}
                            temp_max={city.temp_max}
                            pressure={city.pressure}
                            humidity={city.humidity}
                            wind={city.wind}
                            lat={city.lat}
                            lon={city.lon}
                        />                         
                    )
                })}
                    
            </div>
        )
    }
}

export default CityHistory
