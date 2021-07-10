import React, { Component } from 'react'

class UserLocation extends Component {

    constructor(props) {
        super(props)
    
        this.state = { 
            lat:'',
            lon:''            
        }
    }
      
    componentDidMount(){
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log("lat:",position.coords.latitude,"lon", position.coords.longitude);                
                this.setState({
                  lat : position.coords.latitude,
                  lon: position.coords.longitude
              })
            }
        )
    }

    render() {        
        return (
            <div>
                 <div className="jumbotron bg-warning m-0">
                    <div className="display-4">Your Location</div>
                </div>            
                              
                <iframe className="curLoc w-100 h-100 border-0" title="map" src={`http://maps.google.com/maps?q=${this.state.lat},${this.state.lon}&z=16&output=embed`}></iframe>
            </div>
        )
    }
}

export default UserLocation
