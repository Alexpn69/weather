import './App.css'
import Search from './search'
import useForecast from './hook/useForecast'
import Forecast from './Forecast'
 
const App =(): JSX.Element => {
  const {term, options, forecast, setForecast, city, onInputChange, onOptionSelect, onSubmit} = useForecast()
  return (
<>
<main className='flex justify-center items-center bg-blue-400 h-[100vh] w-full flex-grow'>

{forecast 
? <Forecast data={forecast} />
: (<Search   
    term={term} 
    options={options} 
    onInputChange={onInputChange} 
    onOptionSelect={onOptionSelect} 
    onSubmit={onSubmit} />)}


</main>
</>
  )
}

export default App


