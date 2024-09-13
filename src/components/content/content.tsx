




import React from "react";
import '../contentstyle/content.css';
import Humidity from '../images/humidityicon.png';
import WindSpeed from '../images/wind speed.png';
import { useState } from "react";
import { useEffect } from "react";
import ClearSky from '../images/clear sky icon.jpg';
import CloudyImage from '../images/Cloudy image icon.jpg';
import OvercastClouds from '../images/overcast clouds image.png';
import NormalWeather from '../images/normal weather.png';
import Rain from '../images/rain icon.png';
import { Link } from "react-router-dom";






    interface WeatherData {
        main?: {
            humidity:number;
            temp:number;
        },
        sys?: {
            country:string;
        },
        wind?: {
            speed:number;
        },

        weather?: Array< {
            main:string;
            description:string;
        }>,

        name:string;
    }

   

    const Content = () => {
            const [city, setCity] = useState<string>('');
            const [weather, setWeather] = useState<WeatherData | null>(null);
            const [error, setError] = useState<string | null>(null);
            const [button, setButton] = useState([''])
            const [londonButton, setLondonBtn] = useState([''])
            const [portlandButton, setPortlandButton] = useState([''])
            const [parisButton, setParisButton] = useState([''])
            const [torontoButton, setTorontoButton] = useState([''])

            useEffect(() => {
                let NY:string[] = ['New York City, NY'];
                setButton(NY);
                let LondonBTN:string[] = ['London, UK']
                setLondonBtn(LondonBTN);
                let PortlandBTN:string[] = ['Portland, OR']
                setPortlandButton(PortlandBTN);
                let ParisBTN:string[] = ['Paris, FR']
                setParisButton(ParisBTN);
                let TorontoBTN:string[] = ['Toronto, CA'];
                setTorontoButton(TorontoBTN);


            }, [])




      
           
            useEffect(() => {
                if(city.trim()) {
                    const fetchWeather = async () => {
                        try {
                            const API_KEY = '';
                            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`);
                            if(!response.ok) {
                                throw new Error('unable to fetch data')
                            }
                            const res:WeatherData = await response.json()
                            console.log(res)
                            if(res.main && res.weather && res.weather.length > 0) {
                                setWeather(res);
                                setError(null)
                            }
  
                        } catch(error) {
                            if(error instanceof Error) {
                                setError(error.message);
                            } else {
                                setError('An unexpected error has occurred')
                            }
                            setWeather(null)
                        }
                    }
                            fetchWeather()
                }
                    
            }, [city])

          

         

                const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
                            setCity(event.target.value)
                }


        return (
            <>
            <main className="Content">
                <div className="Content-Wrapper">

                    <div className="content-left">
                      <div className="content-input"><div><input onChange={handleInputChange} value={city} type="text" placeholder="Enter City" required></input></div></div>

                      <div className="content-left-header"><div><h3>Popular Cities</h3></div></div>

                      <div className="content-left-buttons">
                      <div>{button && (
                        <Link to="/newyork"><div><button>{button}</button></div></Link>
                      )}</div>
                        <div> {londonButton && (
                           <Link to="/london"><div><button>{londonButton}</button></div></Link>
                        )}</div>
                        <div>{portlandButton && (
                          <Link to="/portland"><div><button>{portlandButton}</button></div></Link>
                        )}</div>
                        <div>{parisButton && (
                           <Link to="/paris"><div><button>{parisButton}</button></div></Link>
                        )}</div>
                        <div>{torontoButton && (
                            <Link to="/toronto"><div><button>{torontoButton}</button></div></Link>
                        )}</div>
                      </div>

                    </div>



                    <div className="content-right">
                        <div className="content-city-country">
                            
                            { weather && weather.name && weather.name && (
                                <div><div><h3>City: { weather.name }</h3></div></div>
                                 )
                             }
                            
                            { weather && weather.sys && weather.sys.country && (
                                <div><div><h3> Country: {weather.sys.country} </h3></div></div>
                            )}

                          

                        </div>

                        <div className="content-temp-info">

                                    
                             { weather && weather.weather && weather.weather[0].main && (
                                weather.weather[0].main === 'Clear' ? (
                                    <div><div><img src={ClearSky}></img></div></div> 
                                ) :  weather.weather[0].main === 'Clouds' ? (
                                    <div><div><img src={CloudyImage}></img></div></div> ) 
                                    : (
                                        weather.weather[0].main === 'Rain' ? (
                                            <div><div><img src={Rain}></img></div></div>
                                        ) :
                                        <div><div><img src={NormalWeather}></img></div></div>   
                                    )
                                    
                             )}

                             

                             { weather && weather.main && weather.main.temp && (
                                <div><div><h3>{ weather.main.temp.toFixed(2).slice(-2)} °F </h3></div></div>
                             )}

                            { weather && weather.name && weather.name && (
                                <div><div><h3>{weather.name}</h3></div></div>
                            )}

                            { weather && weather.weather && weather.weather[0].description && (
                                <div><div><h3> { weather.weather[0].description } </h3></div></div>
                            )}

                            

                        </div>

                         <div className="content-humidity-wind-wrapper">
                            <div><div><h3>Humidity </h3></div><div></div></div>

                            <div><div><h3>Wind Speed </h3></div></div>

                         </div>

                         <div className="content-humidity-wind-info">
                            { weather && weather.main && weather.main.humidity && (
                                <div><div><h3>{weather.main.humidity + "%"} <span><img src={Humidity}></img></span> </h3></div></div>
                            )}

                            { weather && weather.wind && weather.wind.speed && (
                                <div><div><h3>{Math.round(weather.wind.speed)}mph <span><img src={WindSpeed}></img></span></h3></div></div>
                            )}

                         </div>

                    </div>





                </div>





            </main>

            </>
        )
        
    }


        export default Content
