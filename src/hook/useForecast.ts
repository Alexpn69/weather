import { ChangeEvent, useEffect, useState } from "react"
import {optionType, forecastType} from './../types'
const useForecast = () => {
    const [term, setTerm] = useState<string>("")
    const [options, setOptions] = useState<[]>([])
    const [city, setCity] = useState<optionType | null>(null)
    const [forecast, setForecast] = useState<forecastType | null>(null)

  async function getSearchOptions(value: string) {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/geo/1.0/direct?q=${value.trim()}&limit=10&appid=${import.meta.env.VITE_API_KEY}`);
                                                                                           
      const data = await response.json();
      if (data) {
        setOptions(data);
      }
    } catch (error) {
      console.error(error);
    } 
  }

  const onInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.trim()
    setTerm(value)
    if(value != '') getSearchOptions(value)
  }
  
  
  async function getForecast(city: optionType) {
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${city.lat}&lon=${city.lon}&units=metric&appid=455a49bca864eddd8b48a0441a59bc36`
      );
      const data = await response.json();
      const forecastData ={
        ...data.city,
        list: data.list.slice(0, 16),
      }
      if (forecastData) {
        setForecast(forecastData);
      }
    } catch (error) {
      console.error(error);
    } 
  }


  const onSubmit = () =>{
  if(!city) return
  getForecast(city)
  }
  
  const onOptionSelect = (option: optionType) =>{
    setCity(option)
  }
  
  useEffect(() =>{
    if(city){
      setTerm(city.name)
      setOptions([])
    }
  }, [city])
  
    return{
        term, options, forecast, city, onInputChange, onOptionSelect, onSubmit, setForecast
    }
}
 
export default useForecast;