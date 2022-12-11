import './App.css'
import Search from './search'
import useForecast from './hook/useForecast'
import Forecast from './Forecast'
 
const App =(): JSX.Element => {
  const {term, options, forecast, setForecast, city, onInputChange, onOptionSelect, onSubmit} = useForecast()
  return (
<>
{/* <main className={forecast ? 'flex flex-col justify-center bg-blue-400 w-full'
: 'flex flex-col justify-center items-center bg-blue-400 h-full w-full'}
> */}
<main className='flex flex-col items-center justify-center bg-blue-400'>


<Search   
    term={term} 
    options={options} 
    onInputChange={onInputChange} 
    onOptionSelect={onOptionSelect} 
    onSubmit={onSubmit} 
    forecast={forecast}/>
{forecast && <Forecast data={forecast} />}

</main>
</>
  )
}

export default App


