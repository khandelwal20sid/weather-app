import axios from "axios";
import React, { Component } from 'react'
import { Link } from "react-router-dom";
import CityCard from "./CityCard";
import Error from "./Error";


class Home extends Component {

    constructor(props) {
        super(props)
        this.inputRef = React.createRef()
        this.state = {
            city:"",            
            goodtogo: false,
            error:false,
            cities:[]
        }        

    }    
    
    handleCityChange= (e) => {
        this.setState({
            city: e.target.value
        })
    }    

    componentDidMount() {
        this.inputRef.current.focus()
    }

    handleSumit = (e) =>{
        e.preventDefault()        
        axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${this.state.city}&appid=9de9870d67cb7fdb5d491662060447eb`,
        {
            params: {
                q: this.state.city,
                appid: "9de9870d67cb7fdb5d491662060447eb"
              }
        })
            .then(res=>{   
                const diff = 273.15                
                let cities = [...this.state.cities];
                cities.unshift({
                    id: res.data.weather[0].id,
                    cityName:res.data.name,
                    country:res.data.sys.country,
                    main: res.data.weather[0].main,
                    description:res.data.weather[0].description,
                    temp:res.data.main.temp-diff,
                    temp_min:res.data.main.temp_min-diff,
                    temp_max:res.data.main.temp_max-diff,
                    pressure:res.data.main.pressure,
                    humidity:res.data.main.humidity,
                    wind:res.data.wind.speed,
                    lat:res.data.coord.lat,
                    lon:res.data.coord.lon,                    
                });                     
                this.setState({
                    cities,
                    goodtogo:true,
                    error:false                                                                         
                })
            })
            .catch(()=>{
                console.log("Error!");               
                this.setState({                    
                    error:true
                })
            })
        }              

    render() {            
        const goodtogo = this.state.goodtogo
        const { error } = this.state
        let card
        if (goodtogo) {           
            card = <CityCard
                city={this.state.cities[0].cityName}
                country={this.state.cities[0].country}
                main={this.state.cities[0].main}
                description={this.state.cities[0].description}
                temp={this.state.cities[0].temp}
                temp_min={this.state.cities[0].temp_min}
                temp_max={this.state.cities[0].temp_max}
                pressure={this.state.cities[0].pressure}
                humidity={this.state.cities[0].humidity}
                wind={this.state.cities[0].wind}
                lat={this.state.cities[0].lat}
                lon={this.state.cities[0].lon}  
            />
        }
        if (error) {
            card = <Error />
        }
        return (
            <div>
                <div className="bg-warning">
                    <div className="pt-5 display-4">Weather Forecasting</div>
                    <div className="text-center px-5 py-3">
                    <Link className="btn btn-dark" to={{
                            pathname:"/history",
                            aboutProps:{
                                cities: this.state.cities                                
                            }
                        }}>History</Link>
                    {/* <Link className="btn btn-dark mx-2" to={{
                            pathname:"/current-location",                            
                        }}>Your Location</Link>                                             */}
                    </div>
                    <div className="container py-4">
                        <form onSubmit={this.handleSumit}>
                        <input
                            className="px-2"
                            type="text"
                            ref={this.inputRef}
                            placeholder="Enter City Name" 
                            value={this.state.city}
                            onChange={this.handleCityChange}
                        />
                        </form>                
                    </div>
                </div>
                    {card}        
            </div>
            
        )
    }
}

export default Home
