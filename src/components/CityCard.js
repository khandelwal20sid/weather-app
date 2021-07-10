import React, { Component } from 'react'

class CityCard extends Component {    
    render() {      
        return (
            <div className="mt-lg-5 mt-1">
                <div className="card mx-md-5 mx-3 my-5 bg-light">
                  <div className="row">
                    <div className="col-md-6 col-12">
                      <div className="text-center py-3"><h1><span className="text-capitalize px-2">{this.props.city}</span><span className="lead">&#40;{this.props.country}&#41;</span></h1></div>
                      <div className="text-left">
                      <ul>
                        <li>Weather: <span className="text-primary font-italic"> {this.props.main}, &#40;{this.props.description}&#41;</span></li>
                        <li>Temperature: <span className="text-primary font-italic">{this.props.temp} &#176;C</span>
                          <ul>
                            <li>Min: <span className="text-primary font-italic">{this.props.temp_min} &#176;C</span></li>
                            <li>Max: <span className="text-primary font-italic">{this.props.temp_max} &#176;C</span></li>
                          </ul>
                        </li>
                        <li>Pressure: <span className="text-primary font-italic">{this.props.pressure} hPa</span></li>
                        <li>Humidity: <span className="text-primary font-italic">{this.props.humidity} %</span></li>
                        <li>Wind Speed: <span className="text-primary font-italic">{this.props.wind} meter/sec</span></li>
                      </ul>
                      </div>
                    </div>

                    <div className="col-md-6 col-12">                                         
                      <iframe className="w-100 h-100 border-0" title="map" src={`http://maps.google.com/maps?q=${this.props.lat},${this.props.lon}&z=16&output=embed`}></iframe>
                    </div>
                  </div>
                </div>
            </div>
        )
    }
}

export default CityCard